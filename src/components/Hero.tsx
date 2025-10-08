import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <div>One dashboard.</div>
                <div><span className="gradient-text">Every subscription.</span></div>
                <div>Zero surprises.</div>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Track all your recurring payments, get billing reminders, and cancel subscriptions in one place.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="primary-gradient text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-smooth hover:scale-105 w-full sm:w-auto"
                onClick={() => window.location.href = '/dashboard'}
              >
                Start Free Trial
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-sm text-muted-foreground">
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
          
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="BillMate Dashboard Preview" 
                className="rounded-2xl shadow-2xl transition-smooth hover:scale-105 w-full"
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