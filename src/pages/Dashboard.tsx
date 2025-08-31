import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Calendar as CalendarIcon, BarChart3, Settings } from "lucide-react";
import SubscriptionList from "@/components/dashboard/SubscriptionList";
import AddSubscriptionDialog from "@/components/dashboard/AddSubscriptionDialog";
import InsightsChart from "@/components/dashboard/InsightsChart";
import SubscriptionCalendar from "@/components/dashboard/SubscriptionCalendar";
import ReminderSettings from "@/components/dashboard/ReminderSettings";
import FreeTrialBanner from "@/components/dashboard/FreeTrialBanner";

const Dashboard = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [showTrialBanner, setShowTrialBanner] = useState(true);
  
  return (
    <div className="min-h-screen dashboard-bg">
      {/* Header */}
      <header className="border-b card-gradient-bg backdrop-blur-sm border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-4xl font-bold gradient-text">BillMate</h1>
              <p className="text-muted-foreground">Manage your subscriptions effortlessly</p>
            </div>
            <Button 
              onClick={() => setIsAddDialogOpen(true)} 
              className="gap-2 primary-gradient hover:primary-shadow transition-smooth hover-lift"
            >
              <Plus className="h-4 w-4" />
              Add Subscription
            </Button>
          </div>
        </div>
      </header>

      {/* Free Trial Banner */}
      {showTrialBanner && (
        <div className="container mx-auto px-6 pt-4">
          <FreeTrialBanner onDismiss={() => setShowTrialBanner(false)} />
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto card-gradient-bg p-3 pb-4 rounded-2xl shadow-lg border-0">
            <TabsTrigger 
              value="dashboard" 
              className="rounded-xl transition-all duration-300 ease-out py-3 px-4 text-sm font-medium hover:bg-white/20 hover:scale-105 data-[state=active]:primary-gradient data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105"
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="calendar"
              className="rounded-xl transition-all duration-300 ease-out py-3 px-4 text-sm font-medium hover:bg-white/20 hover:scale-105 data-[state=active]:accent-gradient data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105"
            >
              <CalendarIcon className="h-4 w-4 mr-2" />
              Calendar
            </TabsTrigger>
            <TabsTrigger 
              value="insights"
              className="rounded-xl transition-all duration-300 ease-out py-3 px-4 text-sm font-medium hover:bg-white/20 hover:scale-105 data-[state=active]:success-gradient data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Insights
            </TabsTrigger>
            <TabsTrigger 
              value="settings"
              className="rounded-xl transition-all duration-300 ease-out py-3 px-4 text-sm font-medium hover:bg-white/20 hover:scale-105 data-[state=active]:secondary-gradient data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="interactive-card card-gradient-bg border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-muted-foreground">Monthly Spending</CardTitle>
                  <CardDescription>This month's total</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold gradient-text mb-2">$127.95</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm success-gradient text-white px-2 py-1 rounded-full">+5%</span>
                    <span className="text-sm text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="interactive-card card-gradient-bg border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-muted-foreground">Active Subscriptions</CardTitle>
                  <CardDescription>Currently active</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold gradient-text mb-2">8</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm warning-gradient text-white px-2 py-1 rounded-full">2 due soon</span>
                    <span className="text-sm text-muted-foreground">this week</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="interactive-card card-gradient-bg border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-muted-foreground">Next Payment</CardTitle>
                  <CardDescription>Upcoming renewal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold gradient-text mb-1">Netflix</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm secondary-gradient text-white px-2 py-1 rounded-full">3 days</span>
                    <span className="text-sm font-semibold">$15.99</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <SubscriptionList />
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <Card className="card-gradient-bg border-0 shadow-xl">
              <CardHeader className="accent-gradient text-white rounded-t-lg">
                <CardTitle className="text-2xl">Subscription Calendar</CardTitle>
                <CardDescription className="text-white/90">View all your subscription renewal dates at a glance</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <SubscriptionCalendar />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="interactive-card card-gradient-bg border-0 shadow-xl">
                <CardHeader className="success-gradient text-white rounded-t-lg">
                  <CardTitle className="text-xl">Monthly Spending Trend</CardTitle>
                  <CardDescription className="text-white/90">Track your subscription costs over time</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <InsightsChart type="monthly" />
                </CardContent>
              </Card>
              
              <Card className="interactive-card card-gradient-bg border-0 shadow-xl">
                <CardHeader className="secondary-gradient text-white rounded-t-lg">
                  <CardTitle className="text-xl">Spending by Category</CardTitle>
                  <CardDescription className="text-white/90">See where your money goes</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <InsightsChart type="category" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="card-gradient-bg border-0 shadow-xl">
              <CardHeader className="primary-gradient text-white rounded-t-lg">
                <CardTitle className="text-2xl">Notification Settings</CardTitle>
                <CardDescription className="text-white/90">Manage your reminder preferences</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ReminderSettings />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <AddSubscriptionDialog 
        open={isAddDialogOpen} 
        onOpenChange={setIsAddDialogOpen} 
      />
    </div>
  );
};

export default Dashboard;