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
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Everything you need to{" "}
            <span className="gradient-text">manage subscriptions</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            BillMate simplifies subscription management with powerful features designed to save you time and money.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card-bg border-0 transition-smooth hover:card-hover-shadow hover:-translate-y-2 group"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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