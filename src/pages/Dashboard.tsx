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

const Dashboard = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">BillMate</h1>
              <p className="text-muted-foreground">Manage your subscriptions effortlessly</p>
            </div>
            <Button onClick={() => setIsAddDialogOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Subscription
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="calendar">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Calendar
            </TabsTrigger>
            <TabsTrigger value="insights">
              <BarChart3 className="h-4 w-4 mr-2" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Spending</CardTitle>
                  <CardDescription>This month's total</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">$127.95</div>
                  <p className="text-sm text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Active Subscriptions</CardTitle>
                  <CardDescription>Currently active</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">8</div>
                  <p className="text-sm text-muted-foreground">2 due this week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Next Payment</CardTitle>
                  <CardDescription>Upcoming renewal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-semibold text-primary">Netflix</div>
                  <p className="text-sm text-muted-foreground">Due in 3 days - $15.99</p>
                </CardContent>
              </Card>
            </div>
            
            <SubscriptionList />
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Calendar</CardTitle>
                <CardDescription>View all your subscription renewal dates at a glance</CardDescription>
              </CardHeader>
              <CardContent>
                <SubscriptionCalendar />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Spending Trend</CardTitle>
                  <CardDescription>Track your subscription costs over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <InsightsChart type="monthly" />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spending by Category</CardTitle>
                  <CardDescription>See where your money goes</CardDescription>
                </CardHeader>
                <CardContent>
                  <InsightsChart type="category" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage your reminder preferences</CardDescription>
              </CardHeader>
              <CardContent>
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