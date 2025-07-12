import { HeroHeader } from "~/components/header";
import { Footer } from "components/footer";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <HeroHeader />
      <main className="relative flex flex-col min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
