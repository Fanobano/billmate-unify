import { Button } from "@/components/ui/button";
import heroImage from "@/assets/app-logos.jpeg";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex justify-center items-center">
          <div className="space-y-6 sm:space-y-8 text-center max-w-4xl">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <div>One dashboard.</div>
                <div><span className="gradient-text">Every subscription.</span></div>
                <div>Zero surprises.</div>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
                Track all your recurring payments, get billing reminders, and cancel subscriptions in one place.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="primary-gradient text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-smooth hover:scale-105 w-full sm:w-auto max-w-xs"
                onClick={() => window.location.href = '/signup'}
              >
                Get Started
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;