import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Bell, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Track All Subscriptions",
      description: "Monitor all your recurring payments in one centralized dashboard. See exactly where your money goes each month and identify subscriptions you might have forgotten about.",
      image: "/placeholder.svg"
    },
    {
      icon: Bell,
      title: "Smart Billing Reminders",
      description: "Never get surprised by unexpected charges again. Receive timely notifications before your subscriptions renew, giving you control over your spending.",
      image: "/placeholder.svg"
    },
    {
      icon: Settings,
      title: "Easy Subscription Management",
      description: "Cancel, modify, or manage all your subscriptions from one place. No more hunting through different websites or calling customer service.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Powerful Features for <span className="gradient-text">Complete Control</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                BillMate provides everything you need to take control of your subscription spending and never miss an important payment again.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="card-hover-shadow transition-smooth hover:scale-[1.02]">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0 items-center">
                      {/* Image Section */}
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-l-lg">
                        <div className="flex items-center justify-center h-48">
                          <feature.icon className="w-24 h-24 text-primary" />
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-foreground">
                            {feature.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of users who have simplified their subscription management.
                </p>
                <button className="primary-gradient text-white font-semibold px-8 py-3 rounded-xl transition-smooth hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;