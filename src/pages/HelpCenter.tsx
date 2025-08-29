import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Help Center</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions and get support
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">How do I add a subscription?</h3>
                  <p className="text-muted-foreground">
                    Click the "Add Subscription" button on your dashboard and enter the subscription details including name, cost, and billing cycle.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Can I set custom reminder times?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can customize when you receive billing reminders in your account settings. Choose from 1, 3, 7, or 14 days before billing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">How do I cancel my BillMate subscription?</h3>
                  <p className="text-muted-foreground">
                    Go to Account Settings and click "Cancel Subscription". Your account will remain active until the end of your billing period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Is my data secure?</h3>
                  <p className="text-muted-foreground">
                    Yes, we use bank-level encryption and security measures to protect your data. We never store your payment information.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Still Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;