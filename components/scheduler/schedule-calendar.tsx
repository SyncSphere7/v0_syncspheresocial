"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

export function ScheduleCalendar() {
  // Example dates with posts
  const datesWithPosts = [
    new Date(2025, 4, 7),
    new Date(2025, 4, 8),
    new Date(2025, 4, 9),
    new Date(2025, 4, 10),
    new Date(2025, 4, 15),
    new Date(2025, 4, 20),
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          modifiers={{
            booked: datesWithPosts,
          }}
          modifiersStyles={{
            booked: {
              fontWeight: "bold",
              backgroundColor: "hsl(var(--primary) / 0.1)",
              color: "hsl(var(--primary))",
              borderRadius: "0",
            },
          }}
          className="rounded-md border"
        />
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Badge variant="outline" className="mr-2">
              Today
            </Badge>
            <span>May 6, 2025</span>
          </div>
          <div className="text-muted-foreground">4 posts scheduled</div>
        </div>
      </CardContent>
    </Card>
  )
}
