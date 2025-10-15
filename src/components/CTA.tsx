import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 primary-gradient">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-2">
            Ready to take control of your subscriptions?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
            Join thousands of users who have already simplified their subscription management with BillMate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-smooth hover:border-white hover:text-white w-full sm:w-auto"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;