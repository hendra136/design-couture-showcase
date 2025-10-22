import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portfolioCategories = [
    { title: "Menswear", href: "/portfolio/menswear" },
    { title: "Womenswear", href: "/portfolio/womenswear" },
    { title: "Sportswear", href: "/portfolio/sportswear" },
    { title: "Custom Projects", href: "/portfolio/custom" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-display font-semibold text-foreground hover:text-primary transition-colors">
            Portfolio Desain Apparel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-body text-foreground/80 hover:text-foreground transition-colors">
              Beranda
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-body">
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                      {portfolioCategories.map((category) => (
                        <li key={category.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{category.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Kontak</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-body text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beranda
              </Link>

              <div>
                <div className="text-sm font-body text-foreground/80 mb-2">Portfolio</div>
                <div className="pl-4 space-y-2">
                  {portfolioCategories.map((category) => (
                    <Link
                      key={category.title}
                      to={category.href}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Kontak
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
