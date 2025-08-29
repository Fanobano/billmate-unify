import Header from "@/components/Header";
import Footer from "@/components/Footer";

const API = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">BillMate API</h1>
            <p className="text-xl text-muted-foreground">
              Integrate BillMate's powerful subscription management into your applications
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Getting Started</h2>
              <p className="text-muted-foreground mb-4">
                Our REST API allows you to manage subscriptions, track billing, and automate payments programmatically.
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <code className="text-sm">
                  GET https://api.billmate.com/v1/subscriptions
                </code>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Authentication</h2>
              <p className="text-muted-foreground">
                All API requests require authentication using your API key in the Authorization header.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Rate Limits</h2>
              <p className="text-muted-foreground">
                API requests are limited to 1000 requests per hour per API key.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default API;