import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Bell, Plus, X } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Track All Subscriptions",
    description: "Get a complete overview of all your recurring payments in one centralized dashboard. Never lose track of what you're paying for.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Bell,
    title: "Smart Billing Reminders",
    description: "Receive timely notifications via email and SMS before your subscriptions renew. Stay informed and avoid unwanted charges.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Plus,
    title: "Easy Subscription Management",
    description: "Add new subscriptions with a few clicks or cancel unwanted ones instantly. Take control of your recurring expenses.",
    gradient: "from-pink-500 to-red-600"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to{" "}
            <span className="gradient-text">manage subscriptions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BillMate simplifies subscription management with powerful features designed to save you time and money.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card-bg border-0 transition-smooth hover:card-hover-shadow hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;