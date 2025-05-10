"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function ScheduleCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Example dates with posts
  const datesWithPosts = [
    new Date(2025, 4, 7),
    new Date(2025, 4, 8),
    new Date(2025, 4, 9),
    new Date(2025, 4, 10),
    new Date(2025, 4, 15),
    new Date(2025, 4, 20),
  ]

  // Format date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return ""
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  // Count posts for the selected date
  const getPostCount = (date: Date | undefined) => {
    if (!date) return 0
    return datesWithPosts.filter(
      (d) =>
        d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear(),
    ).length
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Content Calendar</CardTitle>
      </CardHeader>
      <CardContent className="p-0 pb-4">
        <div className="p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiers={{
              booked: datesWithPosts,
            }}
            modifiersClassNames={{
              booked: "calendar-booked-date",
            }}
            className="rounded-md border"
          />
        </div>
        <div className="px-4 mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Badge variant="outline" className="mr-2">
              Selected
            </Badge>
            <span>{formatDate(date)}</span>
          </div>
          <div className="text-muted-foreground">
            {getPostCount(date) > 0 ? `${getPostCount(date)} posts scheduled` : "No posts"}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
