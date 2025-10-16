import { useState, useEffect } from 'react';

export interface Subscription {
  id: string;
  name: string;
  logo: string;
  price: number;
  renewalDate: Date;
  category: string;
  status: "active" | "cancelled" | "paused";
  reminderDays?: number;
}

const STORAGE_KEY = 'billmate_subscriptions';

const initialSubscriptions: Subscription[] = [
  {
    id: "1",
    name: "Netflix",
    logo: "🎬",
    price: 250000,
    renewalDate: new Date(2024, 11, 15), // December 15, 2024
    category: "Entertainment",
    status: "active",
    reminderDays: 3
  },
  {
    id: "2",
    name: "Spotify Premium",
    logo: "🎵",
    price: 150000,
    renewalDate: new Date(2024, 11, 20), // December 20, 2024
    category: "Music",
    status: "active",
    reminderDays: 7
  },
  {
    id: "3",
    name: "Adobe Creative Suite",
    logo: "🎨",
    price: 850000,
    renewalDate: new Date(2024, 11, 28), // December 28, 2024
    category: "Software",
    status: "active",
    reminderDays: 14
  }
];

export const useSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        return parsed.map((sub: any) => ({
          ...sub,
          renewalDate: new Date(sub.renewalDate)
        }));
      }
      return initialSubscriptions;
    } catch (error) {
      console.error('Error loading subscriptions from localStorage:', error);
      return initialSubscriptions;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
    } catch (error) {
      console.error('Error saving subscriptions to localStorage:', error);
    }
  }, [subscriptions]);

  const addSubscription = (newSubscription: Omit<Subscription, 'id'>) => {
    const subscription: Subscription = {
      ...newSubscription,
      id: Date.now().toString(),
    };
    setSubscriptions(prev => [...prev, subscription]);
    return subscription;
  };

  const updateSubscription = (updatedSubscription: Subscription) => {
    setSubscriptions(prev =>
      prev.map(sub => sub.id === updatedSubscription.id ? updatedSubscription : sub)
    );
  };

  const deleteSubscription = (id: string) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
  };

  const calculateStats = () => {
    const monthlyTotal = subscriptions.reduce((sum, sub) => sum + sub.price, 0);
    const activeCount = subscriptions.filter(sub => sub.status === 'active').length;
    
    // Find next upcoming payment
    const now = new Date();
    const upcomingSubscriptions = subscriptions
      .filter(sub => sub.renewalDate > now)
      .sort((a, b) => a.renewalDate.getTime() - b.renewalDate.getTime());
    
    const nextPayment = upcomingSubscriptions[0] || null;
    
    // Count subscriptions due soon (within 7 days)
    const dueSoonCount = subscriptions.filter(sub => {
      const daysUntil = Math.ceil((sub.renewalDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      return daysUntil > 0 && daysUntil <= 7;
    }).length;

    return {
      monthlyTotal,
      activeCount,
      nextPayment,
      dueSoonCount
    };
  };

  return {
    subscriptions,
    addSubscription,
    updateSubscription,
    deleteSubscription,
    calculateStats
  };
};