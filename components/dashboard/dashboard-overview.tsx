"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", posts: 4, engagement: 240 },
  { name: "Tue", posts: 3, engagement: 139 },
  { name: "Wed", posts: 5, engagement: 350 },
  { name: "Thu", posts: 2, engagement: 190 },
  { name: "Fri", posts: 6, engagement: 390 },
  { name: "Sat", posts: 4, engagement: 310 },
  { name: "Sun", posts: 3, engagement: 200 },
]

export function DashboardOverview() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Weekly Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="posts" fill="#8884d8" name="Posts" />
              <Bar yAxisId="right" dataKey="engagement" fill="#82ca9d" name="Engagement" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
