import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

const authLayout = layout("./auth/layout.tsx", [
  route("/login", "./auth/login.tsx"),
  route("/register", "./auth/register.tsx"),
]);

const mainLayout = layout("./routes/layout.tsx", [
  index("routes/home.tsx"),
  route("/profil", "routes/profile.tsx"),
  route("/fakultas", "routes/fakultas.tsx"),
  route("/fakultas/:fakultasSlug", "routes/jurusan.tsx"),
  route("/kalender-akademik", "routes/kalender-akademik.tsx"),
]);

export default [
    mainLayout,
    authLayout,
] satisfies RouteConfig;

