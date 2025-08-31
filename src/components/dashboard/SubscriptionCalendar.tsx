import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface SubscriptionEvent {
  date: Date;
  subscriptions: {
    name: string;
    price: number;
    logo: string;
  }[];
}

const mockEvents: SubscriptionEvent[] = [
  {
    date: new Date(2024, 8, 15),
    subscriptions: [{ name: "Netflix", price: 15.99, logo: "🎬" }]
  },
  {
    date: new Date(2024, 8, 20),
    subscriptions: [{ name: "Spotify Premium", price: 9.99, logo: "🎵" }]
  },
  {
    date: new Date(2024, 8, 28),
    subscriptions: [{ name: "Adobe Creative Suite", price: 52.99, logo: "🎨" }]
  },
  {
    date: new Date(2024, 9, 5),
    subscriptions: [
      { name: "GitHub Pro", price: 4.00, logo: "💻" },
      { name: "Dropbox Plus", price: 9.99, logo: "☁️" }
    ]
  },
];

const SubscriptionCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const getDatesWithEvents = () => {
    return mockEvents.map(event => event.date);
  };

  const getEventsForDate = (date: Date) => {
    return mockEvents.find(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const selectedEvent = selectedDate ? getEventsForDate(selectedDate) : null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border pointer-events-auto"
          modifiers={{
            hasEvent: getDatesWithEvents()
          }}
          modifiersStyles={{
            hasEvent: {
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              borderRadius: "50%"
            }
          }}
        />
        
        <div className="mt-4 space-y-2">
          <h3 className="font-semibold text-sm">Legend</h3>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Payment due</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-semibold">
          {selectedDate ? selectedDate.toDateString() : "Select a date"}
        </h3>
        
        {selectedEvent ? (
          <div className="space-y-3">
            {selectedEvent.subscriptions.map((sub, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sub.logo}</span>
                      <div>
                        <div className="font-medium">{sub.name}</div>
                        <div className="text-sm text-muted-foreground">Payment due</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-lg font-semibold">
                      ${sub.price}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="pt-2 border-t">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total for this day:</span>
                <span className="text-lg font-bold text-primary">
                  ${selectedEvent.subscriptions.reduce((sum, sub) => sum + sub.price, 0).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            {selectedDate ? "No payments due on this date" : "Choose a date to see scheduled payments"}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCalendar;