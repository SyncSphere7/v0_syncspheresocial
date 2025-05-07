import { LivestreamSetup } from "@/components/livestream/livestream-setup"
import { PlatformSelector } from "@/components/livestream/platform-selector"
import { StreamSettings } from "@/components/livestream/stream-settings"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Livestream | SyncSphere Social",
}

export default function LivestreamPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Multi-platform Livestream</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LivestreamSetup />
        </div>
        <div>
          <PlatformSelector />
          <div className="mt-6">
            <StreamSettings />
          </div>
        </div>
      </div>
    </div>
  )
}
