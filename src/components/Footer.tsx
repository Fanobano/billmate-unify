const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold gradient-text">BillMate</span>
            </div>
            <p className="text-muted-foreground">
              Simplifying subscription management for individuals and businesses worldwide.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <div className="space-y-2">
              <a href="/features" className="block text-muted-foreground hover:text-primary transition-smooth">Features</a>
              <a href="/pricing" className="block text-muted-foreground hover:text-primary transition-smooth">Pricing</a>
              <a href="/api" className="block text-muted-foreground hover:text-primary transition-smooth">API</a>
              <a href="/integrations" className="block text-muted-foreground hover:text-primary transition-smooth">Integrations</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-smooth">About</a>
              <a href="/blog" className="block text-muted-foreground hover:text-primary transition-smooth">Blog</a>
              <a href="/careers" className="block text-muted-foreground hover:text-primary transition-smooth">Careers</a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-smooth">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <div className="space-y-2">
              <a href="/help-center" className="block text-muted-foreground hover:text-primary transition-smooth">Help Center</a>
              <a href="/privacy" className="block text-muted-foreground hover:text-primary transition-smooth">Privacy</a>
              <a href="/terms" className="block text-muted-foreground hover:text-primary transition-smooth">Terms</a>
              <a href="/status" className="block text-muted-foreground hover:text-primary transition-smooth">Status</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 BillMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;