import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower individuals and families to take complete control of their subscription spending and eliminate financial surprises."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every feature we build is designed with our users' needs in mind, ensuring a seamless and intuitive experience."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your financial data is protected with bank-level security. We never share your information with third parties."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge features to stay ahead of the subscription economy."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="gradient-text">BillMate</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're on a mission to help people regain control over their subscription spending and eliminate the stress of managing multiple recurring payments.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  BillMate was born from a simple frustration: the growing complexity of managing multiple subscription services. In today's digital world, the average person has over 12 active subscriptions, from streaming services to software tools, fitness apps to meal delivery services.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  What started as a personal project to track our own subscriptions quickly evolved into a comprehensive platform when we realized millions of people shared the same struggles. Forgotten subscriptions, unexpected price increases, and the difficulty of canceling services were universal pain points.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, BillMate serves thousands of users worldwide, helping them save money, reduce stress, and take control of their digital spending. We're proud to be the trusted partner in your journey toward better financial management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">What Drives Us</h2>
              <p className="text-xl text-muted-foreground">
                Our core values guide everything we do at BillMate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center card-hover-shadow transition-smooth hover:scale-105">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 primary-gradient rounded-2xl flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">BillMate by the Numbers</h2>
              <p className="text-xl text-muted-foreground">
                See the impact we're making in the subscription management space.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2.5M+</div>
                <div className="text-muted-foreground">Money Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500K+</div>
                <div className="text-muted-foreground">Subscriptions Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Built by a Passionate Team</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Our diverse team of engineers, designers, and financial experts work tirelessly to make BillMate the best subscription management platform available.
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Want to join our mission?</h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals who share our passion for helping people manage their finances better.
                </p>
                <button className="primary-gradient text-white font-semibold px-8 py-3 rounded-xl transition-smooth hover:scale-105">
                  View Open Positions
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

export default About;