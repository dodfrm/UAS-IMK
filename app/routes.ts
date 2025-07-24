import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

const authLayout = layout("./auth/layout.tsx", [
  route("/login", "./auth/login.tsx"),
  route("/register", "./auth/register.tsx"),
]);

const mainLayout = layout("./routes/layout.tsx", [
  index("routes/home.tsx"),
  route("/profil", "routes/profile.tsx"),
  route("/fakultas", "routes/jurusan.tsx"),
  route("/fakultas/:fakultasSlug/:programSlug", "routes/jurusan-detail.tsx"),
  route("/psdku", "routes/psdku.tsx"),
  route("/psdku/:locationSlug/:programSlug", "routes/psdku-detail.tsx"),
  route("/kalender-akademik", "routes/kalender-akademik.tsx"),
  route("/hubungi-kami", "routes/hubungi-kami.tsx"),
]);
export default [
    mainLayout,
    authLayout,
] satisfies RouteConfig;

