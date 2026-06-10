import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/request")({
  validateSearch: (s: Record<string, unknown>) => ({ service: typeof s.service === "string" ? s.service : undefined }),
  component: () => {
    const search = Route.useSearch();
    return <Navigate to="/new-request" search={search} replace />;
  },
});