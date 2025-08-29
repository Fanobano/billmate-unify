import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started with basic subscription tracking",
      features: [
        "Track up to 5 subscriptions",
        "Basic billing reminders",
        "Monthly spending overview",
        "Email notifications",
        "Mobile app access"
      ],
      popular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Pro Plan",
      price: "$9.99",
      period: "/month",
      description: "Everything you need for complete subscription management",
      features: [
        "Unlimited subscription tracking",
        "Smart billing reminders",
        "Advanced analytics & insights",
        "Price change notifications",
        "Subscription recommendations",
        "Priority customer support",
        "Export data & reports"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Family Plan",
      price: "$19.99",
      period: "/month",
      description: "Manage subscriptions for the whole family with shared insights",
      features: [
        "Everything in Pro Plan",
        "Up to 6 family members",
        "Shared family dashboard",
        "Individual spending limits",
        "Family notification settings",
        "Bulk subscription management",
        "Family spending insights",
        "Admin controls & permissions"
      ],
      popular: false,
      buttonText: "Start Free Trial"
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
                Simple, <span className="gradient-text">Transparent Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Choose the perfect plan for your subscription management needs. All plans include a 14-day free trial.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative card-hover-shadow transition-smooth hover:scale-105 ${
                    plan.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="primary-gradient text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full py-6 text-lg font-semibold rounded-xl transition-smooth ${
                        plan.popular 
                          ? 'primary-gradient text-white hover:scale-105' 
                          : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact our sales team for enterprise pricing and custom features tailored to your organization.
                </p>
                <Button variant="outline" className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-xl transition-smooth hover:bg-primary hover:text-white">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;