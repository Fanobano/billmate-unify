import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          {/* Logo section - takes up left space */}
          <div className="flex items-center gap-2 flex-1">
            <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold gradient-text">BillMate</span>
          </div>
          
          {/* Centered navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-smooth">
              Pricing
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
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