import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
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
          <div className="flex items-center gap-4 flex-1 justify-end">
            <Button variant="outline" className="border-2 border-primary text-primary font-semibold px-6 rounded-xl transition-smooth hover:card-hover-shadow">
              Sign In
            </Button>
            <Button className="primary-gradient text-white font-semibold px-6 rounded-lg transition-smooth hover:scale-105">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;