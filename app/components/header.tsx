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
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";

const menuItems = [
  {
    name: "Tentang UBSI",
    children: [
      {
        name: "Profil",
        href: "/profil",
        description: "Sejarah dan visi misi Universitas BSI",
      },
      {
        name: "Peraturan",
        href: "/peraturan",
        description: "Pedoman dan regulasi akademik",
      },
      {
        name: "Unit Bagian",
        href: "/unit-bagian",
        description: "Struktur organisasi dan unit kerja",
      },
    ],
  },
  {
    name: "Fakultas",
    children: [
      {
        name: "Teknik & Informatika",
        href: "/fakultas/teknik",
        description: "Program studi bidang teknologi dan rekayasa",
      },
      {
        name: "Ekonomi & Bisnis",
        href: "/fakultas/ekonomi",
        description: "Program studi bidang ekonomi dan manajemen",
      },
      {
        name: "Komunikasi & Bahasa",
        href: "/fakultas/komunikasi",
        description: "Program studi bidang komunikasi dan linguistik",
      },
    ],
  },
  {
    name: "PSDKU",
    children: [
      {
        name: "Profil",
        href: "/profil",
        description: "Sejarah dan visi misi Universitas BSI",
      },
      {
        name: "Peraturan",
        href: "/peraturan",
        description: "Pedoman dan regulasi akademik",
      },
      {
        name: "Unit Bagian",
        href: "/unit-bagian",
        description: "Struktur organisasi dan unit kerja",
      },
    ],
  },
  { name: "Tentang", href: "/tentang" },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    children?: React.ReactNode;
    href: string;
  }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink
          ref={ref}
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
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
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              {/* Desktop Menu */}
              <div className="hidden lg:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    {menuItems.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        {item.children ? (
                          <>
                            <NavigationMenuTrigger className="text-sm">
                              {item.name}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                                {item.children.map((child, ci) => (
                                  <ListItem
                                    key={ci}
                                    href={child.href}
                                    title={child.name}
                                  >
                                    {child.description}
                                  </ListItem>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                          >
                            <NavLink to={item.href} className="text-sm">
                              {item.name}
                            </NavLink>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) =>
                    item.children ? (
                      <Collapsible key={index}>
                        <CollapsibleTrigger className="flex w-full items-center justify-between text-left font-medium">
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ul className="mt-2 space-y-2 pl-4 text-sm text-muted-foreground">
                            {item.children.map((child, ci) => (
                              <li key={ci}>
                                <NavLink
                                  to={child.href}
                                  className="block py-2 hover:text-foreground transition-colors"
                                  onClick={() => setMenuState(false)}
                                >
                                  {child.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <li key={index}>
                        <NavLink
                          to={item.href}
                          className="block py-2 hover:text-foreground transition-colors"
                          onClick={() => setMenuState(false)}
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Auth Buttons */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:ml-6">
                <Button asChild variant="outline" size="lg">
                  <NavLink to="/login">
                    <span>Masuk</span>
                  </NavLink>
                </Button>
                <Button asChild size="lg">
                  <NavLink to="/signup">
                    <span>Daftar</span>
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
