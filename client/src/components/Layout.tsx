import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "wouter";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [location, navigate] = useLocation();

  const stagesItems = [
    { label: "Stage 1ère année", href: "/stage-1" },
    { label: "Stage 2ème année", href: "/stage-2" },
  ];

  const mobileMenuItems = [
    { label: "Accueil", href: "/" },
    { label: "BTS SIO", href: "/bts-sio" },
    {
      label: "Stages",
      href: "#",
      submenu: stagesItems,
    },
    { label: "Veille technologique", href: "/veille-technologique" },
    { label: "Compétences E4", href: "/competences" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              Portfolio BTS SIO
            </div>
          </Link>

          {/* Desktop Navigation - Aligné à droite */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            <Link href="/">
              <span className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">
                Accueil
              </span>
            </Link>
            <Link href="/bts-sio">
              <span className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">
                BTS SIO
              </span>
            </Link>
            <DropdownMenu
              label="Stages"
              items={stagesItems}
              onNavigate={(href) => navigate(href)}
            />
            <Link href="/veille-technologique">
              <span className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">
                Veille technologique
              </span>
            </Link>
            <Link href="/competences">
              <span className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">
                Compétences E4
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </span>
            </Link>
          </nav>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center gap-4 ml-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <MobileMenu items={mobileMenuItems} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background mt-16">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Portfolio BTS SIO. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
