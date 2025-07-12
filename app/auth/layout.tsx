import { Outlet } from "react-router";
import { HeroHeader } from "~/components/header";


export default function Auth() {
  return (
    <div>
      <HeroHeader />
      <div className="min-h-screen flex items-center bg-gray-100 justify-center">
        <Outlet />
      </div>
    </div>
  );
}
