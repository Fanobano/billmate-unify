import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar as CalendarIcon, BarChart3, Settings, ArrowLeft } from "lucide-react";
import SubscriptionList from "@/components/dashboard/SubscriptionList";
import AddSubscriptionDialog from "@/components/dashboard/AddSubscriptionDialog";
import InsightsChart from "@/components/dashboard/InsightsChart";
import SubscriptionCalendar from "@/components/dashboard/SubscriptionCalendar";
import ReminderSettings from "@/components/dashboard/ReminderSettings";

const Dashboard = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen dashboard-bg">
      {/* Header */}
      <header className="border-b card-gradient-bg backdrop-blur-sm border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:scale-110 transition-transform"
                onClick={() => window.location.href = '/'}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="space-y-1">
                <h1 className="text-4xl font-bold gradient-text">BillMate</h1>
                <p className="text-muted-foreground">Manage your subscriptions effortlessly</p>
              </div>
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Custom Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 card-gradient-bg p-3 rounded-2xl shadow-lg border-0">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 ${
                activeTab === 'dashboard'
                  ? 'primary-gradient text-white shadow-lg scale-105'
                  : 'text-muted-foreground hover:bg-white/20 hover:text-foreground'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 ${
                activeTab === 'calendar'
                  ? 'accent-gradient text-white shadow-lg scale-105'
                  : 'text-muted-foreground hover:bg-white/20 hover:text-foreground'
              }`}
            >
              <CalendarIcon className="h-4 w-4" />
              Calendar
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 ${
                activeTab === 'insights'
                  ? 'success-gradient text-white shadow-lg scale-105'
                  : 'text-muted-foreground hover:bg-white/20 hover:text-foreground'
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              Insights
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 ${
                activeTab === 'settings'
                  ? 'secondary-gradient text-white shadow-lg scale-105'
                  : 'text-muted-foreground hover:bg-white/20 hover:text-foreground'
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="interactive-card card-gradient-bg border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-muted-foreground">Monthly Spending</CardTitle>
                  <CardDescription>This month's total</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold gradient-text mb-2">Rp2.000.000</div>
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
                    <span className="text-sm font-semibold">Rp250.000</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <SubscriptionList />
          </div>
        )}

        {activeTab === 'calendar' && (
          <Card className="card-gradient-bg border-0 shadow-xl">
            <CardHeader className="accent-gradient text-white rounded-t-lg">
              <CardTitle className="text-2xl">Subscription Calendar</CardTitle>
              <CardDescription className="text-white/90">View all your subscription renewal dates at a glance</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <SubscriptionCalendar />
            </CardContent>
          </Card>
        )}

        {activeTab === 'insights' && (
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
        )}

        {activeTab === 'settings' && (
          <Card className="card-gradient-bg border-0 shadow-xl">
            <CardHeader className="primary-gradient text-white rounded-t-lg">
              <CardTitle className="text-2xl">Notification Settings</CardTitle>
              <CardDescription className="text-white/90">Manage your reminder preferences</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ReminderSettings />
            </CardContent>
          </Card>
        )}
      </main>

      <AddSubscriptionDialog 
        open={isAddDialogOpen} 
        onOpenChange={setIsAddDialogOpen} 
      />
    </div>
  );
};

export default Dashboard;