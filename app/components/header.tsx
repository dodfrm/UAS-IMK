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
    title: "Berita",
    href: "https://news.bsi.ac.id/",
    description: "Berita terbaru seputar Universitas BSI",
  },
  {
    title: "Unit Bagian",
    href: "/unit-bagian",
    description: "Struktur organisasi dan unit kerja",
  },
];

const akademikItems = [
  {
    category: "Penelitian",
    links: [
      { title: "LPPM", href: "http://lppm.bsi.ac.id/" },
      { title: "E-LIBRARY", href: "http://elibrary.bsi.ac.id/" },
      { title: "E-JOURNAL", href: "http://ejournal.bsi.ac.id/" },
      { title: "REPOSITORY", href: "https://repository.bsi.ac.id/" },
    ],
  },
  {
    category: "Layanan",
    links: [
      {
        title: "BINTANG SEKOLAH",
        href: "https://bintangsekolahindonesia.com/",
      },
      { title: "PMB UBSI", href: "https://pmb.bsi.ac.id/" },
      { title: "ALUMNI UBSI", href: "http://alumni.bsi.ac.id/" },
      { title: "UJIAN ONLINE", href: "http://www.bsi.ac.id/ujian/" },
      { title: "E-LEARNING", href: "http://elearning.bsi.ac.id/" },
    ],
  },
  {
    category: "Akademik",
    links: [
      { title: "RUANG DOSEN", href: "http://staff.bsi.ac.id/" },
      { title: "KALENDER AKADEMIK", href: "/kalender-akademik" },
      {
        title: "PANDUAN AKADEMIK",
        href: "https://www.bsi.ac.id/ubsi/assets/file/Pedoman%20Akademik%20UBSI_revisi_1920.pdf",
      },
      {
        title: "PROFIL DOSEN",
        href: "https://www.bsi.ac.id/ubsi/psdku-kota-sukabumi-sistem-informasi-d3.ajax#",
      },
    ],
  },
  {
    category: "Alumni",
    links: [
      {
        title: "VERIFIKASI IJAZAH",
        href: "http://alumni.bsi.ac.id/cekijazah.html",
      },
      {
        title: "LEGALISIR IJAZAH",
        href: "http://alumni.bsi.ac.id/alumni.html",
      },
      { title: "BUKU WISUDA", href: "http://alumni.bsi.ac.id/bukuwisuda.html" },
    ],
  },
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
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <NavLink to="/psdku">PSDKU</NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Akademik */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Akademik</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] grid-cols-4 gap-x-6 gap-y-4 p-4 lg:w-[780px]">
                          {akademikItems.map((group) => (
                            <div
                              key={group.category}
                              className="flex flex-col space-y-2"
                            >
                              <h3 className="font-semibold text-foreground">
                                {group.category}
                              </h3>
                              <ul className="space-y-1">
                                {group.links.map((item) => (
                                  <li key={item.title}>
                                    <NavigationMenuLink asChild>
                                      <NavLink
                                        to={item.href}
                                        className="block select-none rounded-md p-2 text-sm leading-none text-muted-foreground no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      >
                                        {item.title}
                                      </NavLink>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
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
                "fixed inset-0 top-[72px] z-10 h-[calc(100vh-72px)] w-full bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden overflow-y-auto", // Added overflow-y-auto here
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

                {/* PSDKU */}
                <NavLink
                  to="/psdku"
                  className="block py-3 text-lg font-medium hover:text-foreground"
                  onClick={() => setMenuState(false)}
                >
                  PSDKU
                </NavLink>

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
                    {akademikItems.map((group) => (
                      <div key={group.category} className="pt-2">
                        <p className="font-bold text-sm text-foreground">
                          {group.category}
                        </p>
                        {group.links.map((item) => (
                          <NavLink
                            key={item.title}
                            to={item.href}
                            className="block py-2 pl-2 text-muted-foreground hover:text-foreground"
                            onClick={() => setMenuState(false)}
                          >
                            {item.title}
                          </NavLink>
                        ))}
                      </div>
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

                <div className="mt-8 flex flex-col space-y-4 pb-8">
                  {" "}
                  {/* Added pb-8 for bottom padding */}
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
