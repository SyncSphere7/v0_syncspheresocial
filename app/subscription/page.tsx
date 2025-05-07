import { SubscriptionPlans } from "@/components/subscription/subscription-plans"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subscription Plans | SyncSphere Social",
}

export default function SubscriptionPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold text-center">Subscription Plans</h1>
      <SubscriptionPlans />
    </div>
  )
}
