import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Loader2, CheckCircle, Play, Music, Code, Gamepad2, Cloud, FileText, Zap, Camera, Mail, ShoppingCart } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

interface AddSubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SubscriptionService {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  category: string;
  averagePrice: number;
  description: string;
}

const popularServices: SubscriptionService[] = [
  { id: 'netflix', name: 'Netflix', icon: Play, color: 'bg-red-500', category: 'Entertainment', averagePrice: 250000, description: 'Streaming movies and TV shows' },
  { id: 'spotify', name: 'Spotify', icon: Music, color: 'bg-green-500', category: 'Music', averagePrice: 150000, description: 'Music streaming service' },
  { id: 'adobe', name: 'Adobe Creative', icon: Camera, color: 'bg-red-600', category: 'Software', averagePrice: 850000, description: 'Creative design tools' },
  { id: 'github', name: 'GitHub Pro', icon: Code, color: 'bg-gray-800', category: 'Development', averagePrice: 60000, description: 'Code repository hosting' },
  { id: 'notion', name: 'Notion', icon: FileText, color: 'bg-gray-700', category: 'Productivity', averagePrice: 120000, description: 'All-in-one workspace' },
  { id: 'disney', name: 'Disney+', icon: Play, color: 'bg-blue-600', category: 'Entertainment', averagePrice: 120000, description: 'Disney streaming service' },
  { id: 'xbox', name: 'Xbox Game Pass', icon: Gamepad2, color: 'bg-green-600', category: 'Gaming', averagePrice: 230000, description: 'Gaming subscription' },
  { id: 'dropbox', name: 'Dropbox', icon: Cloud, color: 'bg-blue-500', category: 'Cloud Storage', averagePrice: 150000, description: 'Cloud file storage' },
  { id: 'zapier', name: 'Zapier', icon: Zap, color: 'bg-orange-500', category: 'Productivity', averagePrice: 320000, description: 'Automation platform' },
  { id: 'mailchimp', name: 'Mailchimp', icon: Mail, color: 'bg-yellow-500', category: 'Marketing', averagePrice: 160000, description: 'Email marketing' },
  { id: 'shopify', name: 'Shopify', icon: ShoppingCart, color: 'bg-green-700', category: 'E-commerce', averagePrice: 460000, description: 'E-commerce platform' },
  { id: 'hulu', name: 'Hulu', icon: Play, color: 'bg-green-400', category: 'Entertainment', averagePrice: 95000, description: 'TV and movie streaming' }
];

type DialogStep = 'select-service' | 'connect-account' | 'connecting' | 'confirm';

const AddSubscriptionDialog: React.FC<AddSubscriptionDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<DialogStep>('select-service');
  const [selectedService, setSelectedService] = useState<SubscriptionService | null>(null);
  const [accountData, setAccountData] = useState({ email: '', accountName: '', reminderDays: '3' });
  const [connectedData, setConnectedData] = useState<any>(null);

  const form = useForm({
    defaultValues: {
      renewalDate: undefined as Date | undefined,
    }
  });

  const handleServiceSelect = (service: SubscriptionService) => {
    setSelectedService(service);
    setCurrentStep('connect-account');
  };

  const handleConnectAccount = async () => {
    if (!accountData.email || !accountData.accountName) {
      toast({
        title: "Missing Information",
        description: "Please fill in both email and account name.",
        variant: "destructive"
      });
      return;
    }

    setCurrentStep('connecting');
    
    // Simulate API connection
    setTimeout(() => {
      const mockData = {
        accountName: accountData.accountName,
        email: accountData.email,
        currentPlan: selectedService?.name === 'Netflix' ? 'Premium' : 'Pro',
        monthlyPrice: selectedService?.averagePrice || 0,
        nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        status: 'Active',
        reminderDays: parseInt(accountData.reminderDays)
      };
      setConnectedData(mockData);
      setCurrentStep('confirm');
    }, 2000);
  };

  const handleConfirmSubscription = () => {
    toast({
      title: "Subscription Added Successfully!",
      description: `${selectedService?.name} has been connected and added to your dashboard.`,
    });
    
    // Reset state
    setCurrentStep('select-service');
    setSelectedService(null);
    setAccountData({ email: '', accountName: '', reminderDays: '3' });
    setConnectedData(null);
    form.reset();
    onOpenChange(false);
  };

  const handleBack = () => {
    if (currentStep === 'connect-account') {
      setCurrentStep('select-service');
      setSelectedService(null);
    } else if (currentStep === 'confirm') {
      setCurrentStep('connect-account');
      setConnectedData(null);
    }
  };

  const handleDialogClose = () => {
    setCurrentStep('select-service');
    setSelectedService(null);
    setAccountData({ email: '', accountName: '', reminderDays: '3' });
    setConnectedData(null);
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        {/* Step 1: Select Service */}
        {currentStep === 'select-service' && (
          <>
            <DialogHeader>
              <DialogTitle>Connect Your Subscriptions</DialogTitle>
              <DialogDescription>
                Choose from popular services to automatically import your subscription details.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
              {popularServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="flex flex-col items-center p-4 border rounded-lg hover:bg-accent transition-colors group"
                  >
                    <div className={cn("p-3 rounded-full mb-2 text-white group-hover:scale-110 transition-transform", service.color)}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-sm text-center">{service.name}</span>
                    <span className="text-xs text-muted-foreground mt-1">Rp{service.averagePrice.toLocaleString('id-ID')}/mo</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end pt-4">
              <Button variant="outline" onClick={handleDialogClose}>
                Cancel
              </Button>
            </div>
          </>
        )}

        {/* Step 2: Connect Account */}
        {currentStep === 'connect-account' && selectedService && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <div className={cn("p-2 rounded-full text-white", selectedService.color)}>
                  <selectedService.icon className="h-5 w-5" />
                </div>
                Connect to {selectedService.name}
              </DialogTitle>
              <DialogDescription>
                Enter your account details to connect your {selectedService.name} subscription.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{selectedService.category}</Badge>
                  <span className="text-sm text-muted-foreground">Average: Rp{selectedService.averagePrice.toLocaleString('id-ID')}/month</span>
                </div>
                <p className="text-sm text-muted-foreground">{selectedService.description}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="email">Account Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={accountData.email}
                    onChange={(e) => setAccountData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="accountName">Account Name/Username</Label>
                  <Input
                    id="accountName"
                    placeholder="Your account name or username"
                    value={accountData.accountName}
                    onChange={(e) => setAccountData(prev => ({ ...prev, accountName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="reminderDays">Reminder (days before due)</Label>
                  <Input
                    id="reminderDays"
                    type="number"
                    min="1"
                    max="30"
                    placeholder="3"
                    value={accountData.reminderDays}
                    onChange={(e) => setAccountData(prev => ({ ...prev, reminderDays: e.target.value }))}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    You'll receive a reminder {accountData.reminderDays || '3'} day{(accountData.reminderDays && parseInt(accountData.reminderDays) !== 1) ? 's' : ''} before your subscription renews.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleConnectAccount}>
                Connect Account
              </Button>
            </div>
          </>
        )}

        {/* Step 3: Connecting */}
        {currentStep === 'connecting' && selectedService && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <div className={cn("p-2 rounded-full text-white", selectedService.color)}>
                  <selectedService.icon className="h-5 w-5" />
                </div>
                Connecting to {selectedService.name}
              </DialogTitle>
              <DialogDescription>
                Please wait while we securely connect to your account...
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Verifying account credentials...</p>
              <p className="text-xs text-muted-foreground text-center max-w-sm">
                We're securely connecting to {selectedService.name} to fetch your subscription details.
              </p>
            </div>
          </>
        )}

        {/* Step 4: Confirm */}
        {currentStep === 'confirm' && selectedService && connectedData && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Connection Successful!
              </DialogTitle>
              <DialogDescription>
                We've found your {selectedService.name} subscription. Please confirm the details below.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("p-2 rounded-full text-white", selectedService.color)}>
                    <selectedService.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedService.name}</h3>
                    <p className="text-sm text-muted-foreground">{connectedData.currentPlan} Plan</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Account:</span>
                    <p className="font-medium">{connectedData.accountName}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email:</span>
                    <p className="font-medium">{connectedData.email}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Monthly Cost:</span>
                    <p className="font-semibold text-lg">Rp{connectedData.monthlyPrice.toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="secondary" className="text-green-600 bg-green-100">
                      {connectedData.status}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Reminder:</span>
                    <p className="font-medium">{connectedData.reminderDays} day{connectedData.reminderDays !== 1 ? 's' : ''} before</p>
                  </div>
                </div>
              </div>

              <Form {...form}>
                <FormField
                  control={form.control}
                  name="renewalDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Next Billing Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                format(connectedData.nextBillingDate, "PPP")
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value || connectedData.nextBillingDate}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleConfirmSubscription} className="bg-green-600 hover:bg-green-700">
                Confirm & Add Subscription
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddSubscriptionDialog;