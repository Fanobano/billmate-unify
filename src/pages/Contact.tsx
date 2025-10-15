import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  
  const questionTemplates = [
    "How do I upgrade to Pro plan?",
    "Can I cancel my subscription anytime?",
    "How do subscription reminders work?"
  ];

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
      
      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about BillMate? Our friendly customer service team is here to help you manage your subscriptions better.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Chat Interface */}
              <Card className="card-hover-shadow flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">Chat with Support</CardTitle>
                  <p className="text-muted-foreground">
                    Send us a message and we'll respond as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4">
                  {/* Question Templates */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">Quick questions:</p>
                    <div className="flex flex-col gap-2">
                      {questionTemplates.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="justify-start text-left h-auto py-3 px-4 rounded-xl hover:bg-primary/10 hover:border-primary transition-smooth"
                          onClick={() => setMessage(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Chat Messages Area */}
                  <div className="flex-1 min-h-[200px] bg-muted/30 rounded-xl p-4 border">
                    <p className="text-sm text-muted-foreground text-center">
                      Start a conversation with our support team
                    </p>
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded-xl flex-1"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          // Handle send message
                          setMessage("");
                        }
                      }}
                    />
                    <Button 
                      className="primary-gradient text-white rounded-xl px-6 transition-smooth hover:scale-105"
                      onClick={() => {
                        // Handle send message
                        setMessage("");
                      }}
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  
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