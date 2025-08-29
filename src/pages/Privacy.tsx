import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your information
            </p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                add subscription details, or contact us for support.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Account information (name, email, password)</li>
                <li>Subscription data (service names, costs, billing dates)</li>
                <li>Usage information and preferences</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and maintain our subscription management service</li>
                <li>Send billing reminders and notifications</li>
                <li>Improve our service and develop new features</li>
                <li>Communicate with you about your account</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at privacy@billmate.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;