import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { UpcomingPosts } from "@/components/dashboard/upcoming-posts"
import { PlatformStats } from "@/components/dashboard/platform-stats"
import { AiInsights } from "@/components/dashboard/ai-insights"
import { EnhancedPostCreator } from "@/components/scheduler/enhanced-post-creator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | SyncSphere Social",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <EnhancedPostCreator />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardOverview />
        <PlatformStats />
        <AiInsights />
      </div>
      <UpcomingPosts />
    </div>
  )
}
