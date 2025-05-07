import { AdCampaignManager } from "@/components/ads/ad-campaign-manager"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ad Campaigns | SyncSphere Social",
}

export default function AdCampaignsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Ad Campaigns</h1>
      <AdCampaignManager />

      {/* We could add a list of active campaigns here */}
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-medium mb-2">No Active Campaigns</h3>
        <p className="text-muted-foreground">
          Create your first ad campaign to start reaching new audiences across multiple platforms.
        </p>
      </div>
    </div>
  )
}
