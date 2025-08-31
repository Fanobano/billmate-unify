import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Crown, X } from "lucide-react";

interface FreeTrialBannerProps {
  onDismiss?: () => void;
}

const FreeTrialBanner: React.FC<FreeTrialBannerProps> = ({ onDismiss }) => {
  // Mock trial start date (7 days ago for demo purposes - in real app this would come from user data)
  const trialStartDate = new Date();
  trialStartDate.setDate(trialStartDate.getDate() - 2); // 2 days into trial
  
  const trialEndDate = new Date(trialStartDate);
  trialEndDate.setDate(trialEndDate.getDate() + 7);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endTime = trialEndDate.getTime();
      const difference = endTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [trialEndDate]);

  const isExpiringSoon = timeLeft.days <= 1;
  const totalTimeLeft = timeLeft.days * 24 * 60 * 60 + timeLeft.hours * 60 * 60 + timeLeft.minutes * 60 + timeLeft.seconds;

  if (totalTimeLeft <= 0) {
    return (
      <Card className="bg-destructive/10 border-destructive/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="h-5 w-5 text-destructive" />
              <div>
                <h3 className="font-semibold text-destructive">Free Trial Expired</h3>
                <p className="text-sm text-destructive/80">Upgrade now to continue using BillMate</p>
              </div>
            </div>
            <Button className="bg-destructive hover:bg-destructive/90">
              Upgrade Now
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${isExpiringSoon ? 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800' : 'bg-primary/5 border-primary/20'}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Crown className={`h-5 w-5 ${isExpiringSoon ? 'text-yellow-600' : 'text-primary'}`} />
              <Badge variant={isExpiringSoon ? "destructive" : "secondary"}>
                Free Trial
              </Badge>
            </div>
            
            <div className="hidden sm:flex items-center gap-1 text-sm">
              <Clock className="h-4 w-4" />
              <span className="font-medium">
                {timeLeft.days > 0 && `${timeLeft.days}d `}
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')} remaining
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile countdown */}
            <div className="sm:hidden text-sm font-medium">
              {timeLeft.days > 0 ? `${timeLeft.days} days left` : `${timeLeft.hours}h ${timeLeft.minutes}m left`}
            </div>
            
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Upgrade to Pro
            </Button>
            
            {onDismiss && (
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8"
                onClick={onDismiss}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                isExpiringSoon ? 'bg-yellow-500' : 'bg-primary'
              }`}
              style={{ 
                width: `${Math.max(0, Math.min(100, (totalTimeLeft / (7 * 24 * 60 * 60)) * 100))}%` 
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Trial started</span>
            <span>{timeLeft.days > 0 ? `${timeLeft.days} days remaining` : 'Expires soon'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreeTrialBanner;