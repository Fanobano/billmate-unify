import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <div>One dashboard.</div>
                <div><span className="gradient-text">Every subscription.</span></div>
                <div>Zero surprises.</div>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Track all your recurring payments, get billing reminders, and cancel subscriptions in one place.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="primary-gradient text-white font-semibold px-8 py-6 text-lg rounded-xl transition-smooth hover:bg-secondary hover:text-primary hover:scale-105">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary font-semibold px-8 py-6 text-lg rounded-xl transition-smooth hover:card-hover-shadow">
                View Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                14-day free trial
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="BillMate Dashboard Preview" 
                className="rounded-2xl shadow-2xl transition-smooth hover:scale-105"
              />
            </div>
            <div className="absolute -inset-4 primary-gradient rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;