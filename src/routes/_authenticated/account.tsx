import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  LogOut,
  Mail,
  User as UserIcon,
  Phone,
  ShieldCheck,
  BadgeCheck,
  AlertTriangle,
  Send,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  getMyProfile,
  updateMyProfile,
  requestEmailChange,
  resendEmailVerification,
  getEmailVerificationStatus,
} from "@/lib/account.functions";
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
  const changeEmail = useServerFn(requestEmailChange);
  const resendVerif = useServerFn(resendEmailVerification);
  const getEmailStatus = useServerFn(getEmailVerificationStatus);

  const profileQ = useQuery({ queryKey: ["my-profile"], queryFn: () => getProfile({}), retry: 1 });
  const adminQ = useQuery({ queryKey: ["is-admin"], queryFn: () => adminFn({}), retry: 1 });
  const emailQ = useQuery({
    queryKey: ["email-status"],
    queryFn: () => getEmailStatus({}),
    retry: 1,
  });

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [resending, setResending] = useState(false);

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
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Impossible de sauvegarder.");
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

  async function handleEmailChange(e: React.FormEvent) {
    e.preventDefault();
    const next = newEmail.trim();
    if (!next) return;
    if (next === emailQ.data?.email) {
      toast.info("C'est déjà votre adresse actuelle.");
      return;
    }
    setSendingEmail(true);
    try {
      const res = await changeEmail({ data: { new_email: next } });
      toast.success(`Lien de confirmation envoyé à ${res.sent_to}.`);
      setNewEmail("");
      queryClient.invalidateQueries({ queryKey: ["email-status"] });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Impossible d'envoyer le lien.");
    } finally {
      setSendingEmail(false);
    }
  }

  async function handleResendVerification() {
    setResending(true);
    try {
      const res = await resendVerif({});
      toast.success(`Nouveau lien envoyé à ${res.sent_to}.`);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Impossible d'envoyer le lien.");
    } finally {
      setResending(false);
    }
  }

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const verified = !!emailQ.data?.verified;
  const pendingEmail = emailQ.data?.new_email;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Mon compte</h1>
      <p className="mt-2 text-muted-foreground">
        Gérez vos informations personnelles et votre accès.
      </p>

      {!emailQ.isLoading && (
        <div
          className={`mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4 text-sm ${
            verified
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-amber-200 bg-amber-50 text-amber-900"
          }`}
        >
          <div className="flex items-center gap-2">
            {verified ? <BadgeCheck className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
            <div>
              <p className="font-semibold">{verified ? "E-mail vérifié" : "E-mail non vérifié"}</p>
              <p className="text-xs opacity-80">
                {verified
                  ? `Adresse confirmée : ${emailQ.data?.email}`
                  : "Confirmez votre adresse pour sécuriser votre compte."}
                {pendingEmail && pendingEmail !== emailQ.data?.email && (
                  <>
                    {" "}
                    · Changement en attente vers <strong>{pendingEmail}</strong>
                  </>
                )}
              </p>
            </div>
          </div>
          {!verified && (
            <button
              onClick={handleResendVerification}
              disabled={resending}
              className="inline-flex items-center gap-1.5 rounded-full bg-amber-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              {resending ? "Envoi…" : "Renvoyer le lien"}
            </button>
          )}
        </div>
      )}

      {profileQ.isError ? (
        <div className="mt-10">
          <QueryError error={profileQ.error} onRetry={() => profileQ.refetch()} />
        </div>
      ) : (
        <form
          onSubmit={handleSave}
          className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6"
        >
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
              className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
            >
              {busy ? "Enregistrement…" : "Enregistrer"}
            </button>
          </div>
        </form>
      )}

      <form
        onSubmit={handleEmailChange}
        className="mt-6 rounded-3xl border border-border bg-card p-6"
      >
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Mail className="h-4 w-4" /> Modifier l'adresse e-mail
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Un lien de confirmation sera envoyé à la nouvelle adresse. Le changement ne devient
          effectif qu'après validation.
        </p>
        <div className="mt-4 flex flex-wrap items-end gap-3">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="nouvelle.adresse@email.com"
            className="flex-1 min-w-[240px] rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
          />
          <button
            type="submit"
            disabled={sendingEmail || !newEmail.trim()}
            className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {sendingEmail ? "Envoi…" : "Envoyer le lien"}
          </button>
        </div>
      </form>

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
            <p className="mt-1 text-xs text-muted-foreground">
              Fin de votre session sur cet appareil.
            </p>
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
