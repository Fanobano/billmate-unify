import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          {/* Logo section - takes up left space */}
          <a href="/" className="flex items-center gap-2 flex-1 cursor-pointer">
            <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold gradient-text">BillMate</span>
          </a>
          
          {/* Centered navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
            <a 
              href="/features" 
              className={`transition-smooth ${
                isActive('/features') 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Features
            </a>
            <a 
              href="/pricing" 
              className={`transition-smooth ${
                isActive('/pricing') 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Pricing
            </a>
            <a 
              href="/about" 
              className={`transition-smooth ${
                isActive('/about') 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </a>
            <a 
              href="/contact" 
              className={`transition-smooth ${
                isActive('/contact') 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </a>
          </nav>
          
          {/* Button section - takes up right space */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
            <Button variant="outline" className="hidden sm:flex border-2 border-primary text-primary font-semibold px-4 sm:px-6 rounded-xl transition-smooth hover:card-hover-shadow" asChild>
              <a href="/signin">Sign In</a>
            </Button>
            <Button className="hidden sm:flex primary-gradient text-white font-semibold px-4 sm:px-6 rounded-lg transition-smooth hover:scale-105" asChild>
              <a href="/signup">Get Started</a>
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col py-4 px-6 gap-4">
              <a 
                href="/features" 
                className={`py-2 transition-smooth ${
                  isActive('/features') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="/pricing" 
                className={`py-2 transition-smooth ${
                  isActive('/pricing') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="/about" 
                className={`py-2 transition-smooth ${
                  isActive('/about') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/contact" 
                className={`py-2 transition-smooth ${
                  isActive('/contact') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="border-2 border-primary text-primary font-semibold rounded-xl w-full" asChild>
                  <a href="/signin">Sign In</a>
                </Button>
                <Button className="primary-gradient text-white font-semibold rounded-lg w-full" asChild>
                  <a href="/signup">Get Started</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;