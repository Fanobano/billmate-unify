const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
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
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Features</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Pricing</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">API</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Integrations</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">About</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Blog</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Careers</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Help Center</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Privacy</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Terms</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Status</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 BillMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;