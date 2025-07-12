import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("/profil", "routes/profile.tsx"),
    route("/fakultas", "routes/fakultas.tsx"),
] satisfies RouteConfig;

