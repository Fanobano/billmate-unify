import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">BillMate</span>
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`transition-smooth ${
                  isActive(link.href) 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-2 border-primary text-primary font-semibold px-6 rounded-xl transition-smooth hover:card-hover-shadow" asChild>
              <a href="/signin">Sign In</a>
            </Button>
            <Button className="primary-gradient text-white font-semibold px-6 rounded-lg transition-smooth hover:scale-105" asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile navigation links */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-smooth ${
                        isActive(link.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile buttons */}
                <div className="flex flex-col gap-3 mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-primary text-primary font-semibold py-6 rounded-xl" 
                    asChild
                  >
                    <a href="/signin">Sign In</a>
                  </Button>
                  <Button 
                    className="w-full primary-gradient text-white font-semibold py-6 rounded-xl" 
                    asChild
                  >
                    <a href="/signup">Get Started</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;