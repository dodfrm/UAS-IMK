import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router";
import { useScroll } from "motion/react";
import { cn } from "~/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";

const tentangItems = [
  {
    title: "Profil",
    href: "/profil",
    description: "Sejarah dan visi misi Universitas BSI",
  },
  {
    title: "Peraturan",
    href: "/peraturan",
    description: "Pedoman dan regulasi akademik",
  },
  {
    title: "Unit Bagian",
    href: "/unit-bagian",
    description: "Struktur organisasi dan unit kerja",
  },
];

const akademikItems = [
  {
    title: "SIAKAD",
    href: "https://students.bsi.ac.id/mahasiswa/login_akd.aspx",
    description: "Sistem Informasi Akademik Mahasiswa",
  },
  {
    title: "Penelitian",
    href: "/penelitian",
    description: "Aktivitas penelitian dan publikasi",
  },
  {
    title: "Layanan Akademik",
    href: "/layanan-akademik",
    description: "Layanan akademik untuk mahasiswa",
  },
  {
    title: "Kalender Akademik",
    href: "/kalender-akademik",
    description: "Jadwal penting akademik",
  },
];

const psdkuItems = [
  {
    title: "PSDKU Karawang",
    href: "/psdku/karawang",
    description: "Program Studi di Luar Kampus Utama Karawang",
  },
  {
    title: "PSDKU Bogor",
    href: "/psdku/bogor",
    description: "Program Studi di Luar Kampus Utama Bogor",
  },
  {
    title: "PSDKU Sukabumi",
    href: "/psdku/sukabumi",
    description: "Program Studi di Luar Kampus Utama Sukabumi",
  }
 
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [openCollapsible, setOpenCollapsible] = React.useState<string | null>(
    null
  );
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const toggleCollapsible = (id: string) => {
    setOpenCollapsible(openCollapsible === id ? null : id);
  };

  return (
    <header>
      <nav
        data-state={menuState ? "active" : undefined}
        className={cn(
          "fixed z-20 w-full transition-colors duration-150 bg-background/50 backdrop-blur-3xl border-b bg-background/80"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-1 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-2">
            {/* Logo + Toggle */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <NavLink
                to="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <img
                  src="/logo.png"
                  className="h-12 w-12 lg:h-16 lg:w-16"
                  alt="Logo BSI University"
                />
              </NavLink>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                {menuState ? (
                  <X className="m-auto size-6" />
                ) : (
                  <Menu className="m-auto size-6" />
                )}
              </button>

              {/* Desktop Menu */}
              <div className="hidden lg:block">
                <NavigationMenu viewport={false}>
                  <NavigationMenuList>
                    {/* Tentang */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Tentang UBSI
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[350px] gap-4 p-4">
                          {tentangItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Fakultas */}
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <NavLink to="/fakultas">Fakultas</NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* PSDKU */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>PSDKU</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-4 p-4">
                          {psdkuItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Akademik */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Akademik</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[350px] gap-4 p-4">
                          {akademikItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Hubungi kami */}
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <NavLink to="/hubungi-kami">Hubungi Kami</NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={cn(
                "fixed inset-0 top-[72px] z-10 h-[calc(100vh-72px)] w-full bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden",
                menuState
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              )}
            >
              <div className="container mx-auto px-4 py-6">
                {/* Tentang UBSI Collapsible */}
                <Collapsible
                  open={openCollapsible === "tentang"}
                  onOpenChange={() => toggleCollapsible("tentang")}
                  className="w-full space-y-2"
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-lg font-medium">
                    Tentang UBSI
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        openCollapsible === "tentang" ? "rotate-180" : ""
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    {tentangItems.map((item) => (
                      <NavLink
                        key={item.title}
                        to={item.href}
                        className="block py-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMenuState(false)}
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm">{item.description}</div>
                      </NavLink>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Fakultas */}
                <NavLink
                  to="/fakultas"
                  className="block py-3 text-lg font-medium hover:text-foreground"
                  onClick={() => setMenuState(false)}
                >
                  Fakultas
                </NavLink>

                {/* PSDKU Collapsible */}
                <Collapsible
                  open={openCollapsible === "psdku"}
                  onOpenChange={() => toggleCollapsible("psdku")}
                  className="w-full space-y-2"
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-lg font-medium">
                    PSDKU
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        openCollapsible === "psdku" ? "rotate-180" : ""
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    {psdkuItems.map((item) => (
                      <NavLink
                        key={item.title}
                        to={item.href}
                        className="block py-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMenuState(false)}
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm">{item.description}</div>
                      </NavLink>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Akademik Collapsible */}
                <Collapsible
                  open={openCollapsible === "akademik"}
                  onOpenChange={() => toggleCollapsible("akademik")}
                  className="w-full space-y-2"
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-lg font-medium">
                    Akademik
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        openCollapsible === "akademik" ? "rotate-180" : ""
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    {akademikItems.map((item) => (
                      <NavLink
                        key={item.title}
                        to={item.href}
                        className="block py-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMenuState(false)}
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm">{item.description}</div>
                      </NavLink>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Hubungi Kami */}
                <NavLink
                  to="/hubungi-kami"
                  className="block py-3 text-lg font-medium hover:text-foreground"
                  onClick={() => setMenuState(false)}
                >
                  Hubungi Kami
                </NavLink>

                <div className="mt-8 flex flex-col space-y-4">
                  <Button asChild variant="outline" size="lg">
                    <NavLink to="/login" onClick={() => setMenuState(false)}>
                      <span>Masuk</span>
                    </NavLink>
                  </Button>
                  <Button asChild size="lg">
                    <NavLink to="/register" onClick={() => setMenuState(false)}>
                      <span>Daftar</span>
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button asChild variant="outline" size="lg">
                <NavLink to="/login">
                  <span>Masuk</span>
                </NavLink>
              </Button>
              <Button asChild size="lg">
                <NavLink to="/register">
                  <span>Daftar</span>
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <NavLink to={href}>
          <div className="font-medium">{title}</div>
          <div className="text-muted-foreground">{children}</div>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
}
