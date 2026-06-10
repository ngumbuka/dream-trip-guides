## Goals

1. **Service detail pages** for sub-services + pre-filled CTA + SEO + sitemap.
2. **Auth (Lovable Cloud)**: email/password + Google sign-in.
3. **User request flow**: signed-in users submit a detailed request for any service/sub-service, with document uploads.
4. **In-platform messaging** between user and admin per request.
5. **Application tracking**: users see status, timeline, messages, and uploaded documents.
6. **Admin follow-up**: admin dashboard to view, update status, reply, and post internal notes.

## Part 1 — Service pages (frontend)

### New sub-service detail routes
Each uses shared `ServiceDetail` with tailored copy + FAQs (visa process, timelines, documents, next steps) + SEO `head()`:
- `/services/logement`, `/services/caution-avi`, `/services/billets-avion`,
  `/services/accueil-integration`, `/services/community-management`, `/services/visa`

### Main service pages
Prominent **"Démarrer ma demande"** CTA → `/request?service=<slug>`.

### Services index
"Inclus" tiles become `<Link>`s to sub-service pages.

### Sitemap
`src/routes/sitemap[.]xml.ts` with all public routes (9 service pages + `/`, `/about`, `/services`, `/contact`, `/auth`).

## Part 2 — Backend (Lovable Cloud)

Enable Lovable Cloud. Configure email/password + Google sign-in (via Lovable broker).

### Database (single migration, with explicit GRANTs)

- `profiles` — id (= auth.users.id), full_name, phone, created_at; auto-created via trigger on signup. RLS: own row read/update; admins read all (via `has_role`).
- `app_role` enum (`admin`, `user`) + `user_roles` table + SECURITY DEFINER `has_role(uuid, app_role)`.
- `service_requests` — id, user_id, service_slug, service_label, destination_country, target_date, travelers_count, budget_range, message, status enum (`nouveau | en_revue | en_cours | en_attente_client | accepte | refuse | termine`), created_at, updated_at. RLS: user sees/inserts own; admin sees/updates all.
- `request_messages` — id, request_id, author_id, author_role (`user|admin`), body (text), created_at, read_by_user_at, read_by_admin_at. RLS: user sees messages on own requests; admin sees all; both can insert on permitted requests.
- `request_updates` — id, request_id, author_id, kind (`status_change|note`), body, new_status, visible_to_user bool, created_at. RLS: user sees `visible_to_user=true` on own requests; admin full access.
- `request_documents` — id, request_id, uploaded_by, storage_path, file_name, mime_type, size_bytes, created_at. RLS: user sees/inserts own request docs; admin sees all.

All tables get explicit `GRANT SELECT, INSERT, UPDATE ... TO authenticated` + `GRANT ALL ... TO service_role` per project rules.

### Storage
Private bucket `request-documents`. Object key pattern: `{user_id}/{request_id}/{uuid}-{filename}`. RLS on `storage.objects`:
- user can `select/insert/delete` objects where the first path segment = `auth.uid()`
- admin can `select` all objects in this bucket (via `has_role`)

### Server functions (`src/lib/requests.functions.ts`, `requireSupabaseAuth`)
- `createRequest(input)` — zod-validated, returns id
- `listMyRequests()` / `getMyRequest(id)` — user-scoped
- `listMyMessages(requestId)` / `sendMessage(requestId, body)` — user posts/reads
- `signDocumentUploadUrl(requestId, fileName, mimeType, sizeBytes)` — returns Supabase signed upload URL; records pending row on success via follow-up `confirmDocument`
- `listMyDocuments(requestId)` + `signDocumentDownloadUrl(docId)`
- `adminListRequests(filters)` / `adminGetRequest(id)` — admin only, verified via `has_role` server-side
- `adminSendMessage(requestId, body)` — admin reply
- `adminUpdateStatus(id, status, note, visible_to_user)` — inserts a `status_change` update row
- `adminPostNote(id, body, visible_to_user)`

### Routes
Under integration-managed `_authenticated/`:
- `/_authenticated/request` — request form (service select prefilled from `?service=`, destination, date, travelers, budget, message, document upload)
- `/_authenticated/my-requests` — list with status badges + unread message indicator
- `/_authenticated/my-requests/$id` — detail: status timeline, message thread (send/receive), documents (upload/download)
- `/_authenticated/admin` — admin dashboard (filters by status, search). Non-admins: "Accès refusé"
- `/_authenticated/admin/$id` — admin detail: status dropdown, message thread, internal notes, documents

Public `/request` redirects to `/_authenticated/request` preserving search params.
Public `/auth` route with email/password tabs + Google button.
Header: "Mon espace" / "Admin" when signed in, "Connexion" otherwise.

### Messaging UX
- Polling via TanStack Query `refetchInterval: 5s` on the open thread (no realtime to keep things simple; can upgrade later to Supabase Realtime).
- `read_by_*_at` timestamps stamped when the thread is opened.

## Out of scope (this iteration)
- Email notifications (can add Resend later).
- Realtime subscriptions (polling is enough; upgrade path is clear).
- Multi-file batch upload progress UI beyond simple per-file feedback.

## Technical notes
- All admin server fns re-verify `has_role(context.userId, 'admin')`; never trust the client.
- Public route loaders never call protected server fns (avoids SSR 401s).
- Document uploads use Supabase signed URLs from the server; the client uploads directly to Storage.
- First admin promoted via SQL after signup; instructions will be shown in chat after migration.
