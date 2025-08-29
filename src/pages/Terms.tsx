import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Terms and conditions for using BillMate
            </p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using BillMate, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Description</h2>
              <p className="text-muted-foreground">
                BillMate is a subscription management service that helps you track, manage, and 
                receive reminders for your recurring subscriptions and payments.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">User Responsibilities</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Billing and Payments</h2>
              <p className="text-muted-foreground mb-4">
                Subscription fees are billed in advance on a monthly or annual basis. You may cancel 
                your subscription at any time through your account settings.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                BillMate shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of the service.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at legal@billmate.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;