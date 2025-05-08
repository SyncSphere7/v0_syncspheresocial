import type React from "react"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { UpcomingPosts } from "@/components/dashboard/upcoming-posts"
import { PlatformStats } from "@/components/dashboard/platform-stats"
import { AiInsights } from "@/components/dashboard/ai-insights"
import { EnhancedPostCreator } from "@/components/scheduler/enhanced-post-creator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Calendar, Clock, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | SyncSphere Social",
  description: "Manage all your social media activities in one place",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage all your social media activities in one place</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/schedule">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/dashboard/ai-assistant">
              <Zap className="mr-2 h-4 w-4" />
              AI Assistant
            </Link>
          </Button>
        </div>
      </div>

      <EnhancedPostCreator />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardOverview />
        <PlatformStats />
        <AiInsights />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Upcoming Posts</CardTitle>
              <CardDescription>Your scheduled content for the next 7 days</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/schedule">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <UpcomingPosts />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Performance at a glance</CardDescription>
            </div>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Total Posts</p>
                  <p className="text-sm text-muted-foreground">This month</p>
                </div>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Engagement Rate</p>
                  <p className="text-sm text-muted-foreground">Avg. across platforms</p>
                </div>
                <p className="text-2xl font-bold">3.8%</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">AI Assists</p>
                  <p className="text-sm text-muted-foreground">Content created with AI</p>
                </div>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardMetricCard
          title="Posts This Week"
          value="8"
          description="+14% from last week"
          icon={<Calendar className="h-4 w-4" />}
        />
        <DashboardMetricCard
          title="Scheduled Posts"
          value="12"
          description="Next 30 days"
          icon={<Clock className="h-4 w-4" />}
        />
        <DashboardMetricCard
          title="Total Followers"
          value="24.5K"
          description="+2.4% growth rate"
          icon={<BarChart2 className="h-4 w-4" />}
        />
        <DashboardMetricCard
          title="AI Suggestions"
          value="18"
          description="Ready to review"
          icon={<Zap className="h-4 w-4" />}
        />
      </div>
    </div>
  )
}

function DashboardMetricCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <p className="text-sm font-medium leading-none">{title}</p>
          <div className="h-4 w-4 text-muted-foreground">{icon}</div>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
