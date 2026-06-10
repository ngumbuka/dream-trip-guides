import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LogOut, Mail, User as UserIcon, Phone, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getMyProfile, updateMyProfile } from "@/lib/account.functions";
import { isCurrentUserAdmin } from "@/lib/requests.functions";
import { QueryError } from "@/components/site/QueryError";

export const Route = createFileRoute("/_authenticated/account")({
  component: AccountPage,
});

function AccountPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const getProfile = useServerFn(getMyProfile);
  const updateProfile = useServerFn(updateMyProfile);
  const adminFn = useServerFn(isCurrentUserAdmin);

  const profileQ = useQuery({ queryKey: ["my-profile"], queryFn: () => getProfile({}), retry: 1 });
  const adminQ = useQuery({ queryKey: ["is-admin"], queryFn: () => adminFn({}), retry: 1 });

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    if (profileQ.data) {
      setFullName(profileQ.data.full_name ?? "");
      setPhone(profileQ.data.phone ?? "");
    }
  }, [profileQ.data]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      await updateProfile({ data: { full_name: fullName, phone } });
      toast.success("Profil mis à jour.");
      queryClient.invalidateQueries({ queryKey: ["my-profile"] });
    } catch (err: any) {
      toast.error(err?.message ?? "Impossible de sauvegarder.");
    } finally {
      setBusy(false);
    }
  }

  async function handlePasswordReset() {
    if (!profileQ.data?.email) return;
    setResetting(true);
    const { error } = await supabase.auth.resetPasswordForEmail(profileQ.data.email, {
      redirectTo: `${window.location.origin}/auth`,
    });
    setResetting(false);
    if (error) toast.error(error.message);
    else toast.success("E-mail de réinitialisation envoyé.");
  }

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Mon compte</h1>
      <p className="mt-2 text-muted-foreground">Gérez vos informations personnelles et votre accès.</p>

      {profileQ.isError ? (
        <div className="mt-10">
          <QueryError error={profileQ.error} onRetry={() => profileQ.refetch()} />
        </div>
      ) : (
        <form onSubmit={handleSave} className="mt-10 space-y-5 rounded-3xl border border-border bg-card p-6">
          <Field
            icon={<UserIcon className="h-4 w-4" />}
            label="Nom complet"
            value={fullName}
            onChange={setFullName}
            placeholder="Votre nom"
          />
          <Field
            icon={<Mail className="h-4 w-4" />}
            label="E-mail"
            value={profileQ.data?.email ?? ""}
            onChange={() => {}}
            readOnly
          />
          <Field
            icon={<Phone className="h-4 w-4" />}
            label="Téléphone"
            value={phone}
            onChange={setPhone}
            placeholder="+237 6XX XX XX XX"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={handlePasswordReset}
              disabled={resetting || !profileQ.data?.email}
              className="text-sm font-semibold text-foreground underline-offset-4 hover:underline disabled:opacity-50"
            >
              {resetting ? "Envoi…" : "Réinitialiser le mot de passe"}
            </button>
            <button
              type="submit"
              disabled={busy || profileQ.isLoading}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              {busy ? "Enregistrement…" : "Enregistrer"}
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <ShieldCheck className="h-4 w-4" /> Rôle
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {adminQ.isLoading ? "…" : adminQ.data?.isAdmin ? "Administrateur" : "Membre"}
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="flex items-center justify-between rounded-3xl border border-border bg-card p-6 text-left hover:bg-muted/40"
        >
          <div>
            <p className="text-sm font-semibold text-foreground">Se déconnecter</p>
            <p className="mt-1 text-xs text-muted-foreground">Fin de votre session sur cet appareil.</p>
          </div>
          <LogOut className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  readOnly,
  icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {icon}
        {label}
      </label>
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground disabled:bg-muted read-only:bg-muted/40"
      />
    </div>
  );
}