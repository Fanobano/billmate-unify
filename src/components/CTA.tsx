import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 primary-gradient">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to take control of your subscriptions?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of users who have already simplified their subscription management with BillMate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary font-semibold px-8 py-6 text-lg rounded-xl transition-smooth hover:bg-secondary hover:text-primary hover:scale-105 hover:shadow-xl"
            >
              Start Your Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white font-semibold px-8 py-6 text-lg rounded-xl transition-smooth hover:bg-secondary hover:text-primary"
            >
              Contact Sales
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Free for 14 days
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              No setup fees
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;