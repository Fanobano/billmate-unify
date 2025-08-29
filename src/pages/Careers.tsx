import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Help us build the future of subscription management
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Why Work at BillMate?</h2>
              <p className="text-muted-foreground mb-6">
                We're a fast-growing team passionate about helping people take control of their subscriptions. 
                Join us in making financial management simpler for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Remote-First</h3>
                <p className="text-muted-foreground">
                  Work from anywhere with flexible hours and a supportive remote culture
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  Learn and grow with mentorship, training, and challenging projects
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Competitive Benefits</h3>
                <p className="text-muted-foreground">
                  Health insurance, retirement plans, and generous time off
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation Focus</h3>
                <p className="text-muted-foreground">
                  Work with cutting-edge technology and contribute to product innovation
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Open Positions</h3>
              <p className="text-muted-foreground">
                We're always looking for talented individuals. Check back soon for open positions or send us your resume at careers@billmate.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;