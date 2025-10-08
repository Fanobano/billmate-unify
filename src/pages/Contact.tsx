import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account or billing questions",
      contact: "support@billmate.com",
      available: "24/7 Support"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our customer service team",
      contact: "1-800-BILLMATE",
      available: "Mon-Fri, 9AM-6PM EST"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 sm:pt-24">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
                Have questions about BillMate? Our friendly customer service team is here to help you manage your subscriptions better.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="card-hover-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <Button className="w-full primary-gradient text-white font-semibold py-6 text-lg rounded-xl transition-smooth hover:scale-105">
                    Send Message
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    We typically respond within 2-4 hours during business hours
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Other ways to reach us</h2>
                  <p className="text-muted-foreground">
                    Choose the contact method that works best for you.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-hover-shadow transition-smooth hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 primary-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{info.title}</h3>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                          <p className="font-medium text-primary">{info.contact}</p>
                          <p className="text-sm text-muted-foreground">{info.available}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* FAQ Link */}
                <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">Looking for quick answers?</h3>
                    <p className="text-muted-foreground mb-4">
                      Check out our FAQ section for instant answers to common questions.
                    </p>
                    <Button variant="outline" className="border-2 border-primary text-primary font-semibold px-6 py-2 rounded-xl transition-smooth hover:bg-primary hover:text-white">
                      View FAQ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;