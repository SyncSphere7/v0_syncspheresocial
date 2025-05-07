import { PostScheduler } from "@/components/scheduler/post-scheduler"
import { ScheduleCalendar } from "@/components/scheduler/schedule-calendar"
import { ScheduledPostsList } from "@/components/scheduler/scheduled-posts-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule Posts | SyncSphere Social",
}

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Schedule Posts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PostScheduler />
        </div>
        <div>
          <ScheduleCalendar />
        </div>
      </div>
      <ScheduledPostsList />
    </div>
  )
}
