import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Integrations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Integrations</h1>
            <p className="text-xl text-muted-foreground">
              Connect BillMate with your favorite tools and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Payment Processors</h3>
              <p className="text-muted-foreground mb-4">
                Stripe, PayPal, Square, and more payment gateways
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Banking</h3>
              <p className="text-muted-foreground mb-4">
                Connect your bank accounts for automatic transaction tracking
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Accounting</h3>
              <p className="text-muted-foreground mb-4">
                QuickBooks, Xero, FreshBooks integration
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Business Tools</h3>
              <p className="text-muted-foreground mb-4">
                Slack, Microsoft Teams, Google Workspace
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;