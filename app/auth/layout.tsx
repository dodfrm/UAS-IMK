import { Outlet } from "react-router";
import { HeroHeader } from "~/components/header";


export default function Auth() {
  return (
    <div>
      <HeroHeader />
      <div className="pt-20 min-h-screen flex items-center bg-gray-100 justify-center">
        <Outlet />
      </div>
    </div>
  );
}
