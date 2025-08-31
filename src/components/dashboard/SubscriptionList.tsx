import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { MoreVertical, Trash2, Edit, ExternalLink, Bell } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import EditSubscriptionDialog from "./EditSubscriptionDialog";

interface Subscription {
  id: string;
  name: string;
  logo: string;
  price: number;
  renewalDate: Date;
  category: string;
  status: "active" | "cancelled" | "paused";
  reminderDays?: number;
}

const mockSubscriptions: Subscription[] = [
  {
    id: "1",
    name: "Netflix",
    logo: "🎬",
    price: 15.99,
    renewalDate: new Date(2024, 8, 15),
    category: "Entertainment",
    status: "active",
    reminderDays: 3
  },
  {
    id: "2",
    name: "Spotify Premium",
    logo: "🎵",
    price: 9.99,
    renewalDate: new Date(2024, 8, 20),
    category: "Music",
    status: "active",
    reminderDays: 7
  },
  {
    id: "3",
    name: "Adobe Creative Suite",
    logo: "🎨",
    price: 52.99,
    renewalDate: new Date(2024, 8, 28),
    category: "Software",
    status: "active",
    reminderDays: 14
  },
  {
    id: "4",
    name: "GitHub Pro",
    logo: "💻",
    price: 4.00,
    renewalDate: new Date(2024, 9, 5),
    category: "Development",
    status: "active",
    reminderDays: 1
  }
];

const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState(mockSubscriptions);
  const [editingSubscription, setEditingSubscription] = useState<Subscription | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric", 
      year: "numeric" 
    });
  };

  const getDaysUntilRenewal = (date: Date) => {
    const today = new Date();
    const diff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const getStatusBadge = (status: string, daysUntil: number) => {
    if (daysUntil <= 3) {
      return <Badge className="warning-gradient text-white pulse-soft">Due Soon</Badge>;
    }
    if (daysUntil <= 7) {
      return <Badge className="secondary-gradient text-white">Due This Week</Badge>;
    }
    return <Badge className="success-gradient text-white">Active</Badge>;
  };

  const handleCancelSubscription = (id: string) => {
    setSubscriptions(subs => subs.filter(sub => sub.id !== id));
  };

  const handleEditSubscription = (subscription: Subscription) => {
    setEditingSubscription(subscription);
    setIsEditDialogOpen(true);
  };

  const handleUpdateSubscription = (updatedSubscription: Subscription) => {
    setSubscriptions(subs => 
      subs.map(sub => 
        sub.id === updatedSubscription.id ? updatedSubscription : sub
      )
    );
  };

  const getReminderText = (reminderDays?: number) => {
    if (!reminderDays) return "No reminder set";
    if (reminderDays === 1) return "1 day before";
    if (reminderDays === 7) return "1 week before";
    if (reminderDays === 14) return "2 weeks before";
    return `${reminderDays} days before`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Subscriptions</h2>
        <p className="text-muted-foreground">
          {subscriptions.length} active subscription{subscriptions.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((sub) => {
          const daysUntil = getDaysUntilRenewal(sub.renewalDate);
          
          return (
            <Card key={sub.id} className="interactive-card card-gradient-bg border-0 shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{sub.logo}</div>
                    <div>
                      <CardTitle className="text-lg">{sub.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{sub.category}</p>
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem 
                        className="gap-2"
                        onClick={() => handleEditSubscription(sub)}
                      >
                        <Edit className="h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Website
                      </DropdownMenuItem>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem 
                            className="gap-2 text-destructive focus:text-destructive"
                            onSelect={(e) => e.preventDefault()}
                          >
                            <Trash2 className="h-4 w-4" />
                            Cancel
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Cancel Subscription</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to cancel your {sub.name} subscription? 
                              You'll lose access at the end of your current billing period.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Keep Subscription</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => handleCancelSubscription(sub.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Yes, Cancel
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ${sub.price}
                    </span>
                    {getStatusBadge(sub.status, daysUntil)}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <div>Next payment: {formatDate(sub.renewalDate)}</div>
                    <div>
                      {daysUntil > 0 ? `In ${daysUntil} days` : 'Payment due today'}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Bell className="h-3 w-3" />
                      <span className="text-xs">{getReminderText(sub.reminderDays)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <EditSubscriptionDialog 
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        subscription={editingSubscription}
        onUpdate={handleUpdateSubscription}
      />
    </div>
  );
};

export default SubscriptionList;