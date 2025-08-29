import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 px-6 py-12 relative">
      {/* Back Arrow */}
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute top-6 left-6 hover:scale-110 transition-transform"
        asChild
      >
        <a href="/">
          <ArrowLeft className="h-5 w-5" />
        </a>
      </Button>

      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md shadow-2xl border-0 bg-card/95 backdrop-blur-sm rounded-2xl">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 primary-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-3xl">B</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold gradient-text mb-2">Join BillMate</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Create your account and start managing your bills effortlessly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 px-8">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name"
                className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email address"
                className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300 pr-12"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
              <div className="relative">
                <Input 
                  id="confirmPassword" 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300 pr-12"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-6 px-8 pb-8">
            <Button className="w-full h-12 rounded-xl primary-gradient text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              Create Your Account
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <a href="/signin" className="text-primary hover:underline font-semibold transition-colors">
                Sign in here
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;