import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Connexion — VoyageonsEnsemble" },
      { name: "description", content: "Connectez-vous ou créez votre compte pour suivre vos demandes." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/my-requests" });
    });
  }, [navigate]);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (tab === "signup") {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: window.location.origin, data: { full_name: fullName } },
        });
        if (error) throw error;
        toast.success("Compte créé. Vérifiez vos e-mails si nécessaire.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate({ to: "/my-requests" });
    } catch (err: any) {
      toast.error(err.message ?? "Erreur");
    } finally { setBusy(false); }
  }

  async function handleGoogle() {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) { toast.error(result.error.message); setBusy(false); return; }
    if (result.redirected) return;
    navigate({ to: "/my-requests" });
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <h1 className="text-3xl font-semibold">Bienvenue</h1>
      <p className="mt-2 text-sm text-muted-foreground">Connectez-vous pour suivre vos demandes et échanger avec notre équipe.</p>

      <div className="mt-8 flex gap-2 rounded-full border border-border bg-card p-1 text-sm">
        {(["signin","signup"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 rounded-full px-4 py-2 font-medium ${tab===t?"text-white":"text-muted-foreground"}`}
            style={tab===t ? { backgroundColor: "var(--brand-red)" } : undefined}
          >{t==="signin"?"Connexion":"Créer un compte"}</button>
        ))}
      </div>

      <form onSubmit={handleEmail} className="mt-6 space-y-4 rounded-3xl border border-border bg-card p-6">
        {tab === "signup" && (
          <Field label="Nom complet" value={fullName} onChange={setFullName} required />
        )}
        <Field label="E-mail" type="email" value={email} onChange={setEmail} required />
        <Field label="Mot de passe" type="password" value={password} onChange={setPassword} required />
        <button disabled={busy} className="w-full rounded-full px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--brand-red)" }}>
          {tab === "signin" ? "Se connecter" : "Créer mon compte"}
        </button>
      </form>

      <div className="relative my-6 text-center text-xs uppercase tracking-wider text-muted-foreground">
        <span className="bg-background px-3">ou</span>
        <div className="absolute inset-x-0 top-1/2 -z-10 border-t border-border" />
      </div>

      <button onClick={handleGoogle} disabled={busy}
        className="flex w-full items-center justify-center gap-3 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted">
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.22-4.74 3.22-8.07z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.85 14.12a6.6 6.6 0 0 1 0-4.24V7.04H2.18a11 11 0 0 0 0 9.92z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.04l3.67 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>
        Continuer avec Google
      </button>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        En continuant, vous acceptez nos <Link to="/about" className="underline">conditions</Link>.
      </p>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground" />
    </div>
  );
}