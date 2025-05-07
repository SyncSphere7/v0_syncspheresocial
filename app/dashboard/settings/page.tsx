import { ThemeSettings } from "@/components/settings/theme-settings"
import { AccountSettings } from "@/components/settings/account-settings"
import { PlatformConnections } from "@/components/settings/platform-connections"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings | SyncSphere Social",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ThemeSettings />
        <AccountSettings />
      </div>
      <PlatformConnections />
    </div>
  )
}
