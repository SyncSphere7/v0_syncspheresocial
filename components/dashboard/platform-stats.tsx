import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function PlatformStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Stats</CardTitle>
        <CardDescription>Performance metrics across your connected platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <PlatformStatItem
            platform="Instagram"
            icon={<Instagram className="h-4 w-4" />}
            followers="12.8K"
            engagement="3.2%"
            trend="up"
          />
          <PlatformStatItem
            platform="Twitter"
            icon={<Twitter className="h-4 w-4" />}
            followers="8.4K"
            engagement="2.7%"
            trend="up"
          />
          <PlatformStatItem
            platform="Facebook"
            icon={<Facebook className="h-4 w-4" />}
            followers="5.2K"
            engagement="1.8%"
            trend="down"
          />
          <PlatformStatItem
            platform="YouTube"
            icon={<Youtube className="h-4 w-4" />}
            followers="3.1K"
            engagement="4.5%"
            trend="up"
          />
        </div>
      </CardContent>
    </Card>
  )
}

function PlatformStatItem({
  platform,
  icon,
  followers,
  engagement,
  trend,
}: {
  platform: string
  icon: React.ReactNode
  followers: string
  engagement: string
  trend: "up" | "down" | "neutral"
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">{icon}</div>
        <div>
          <p className="text-sm font-medium">{platform}</p>
          <p className="text-xs text-muted-foreground">{followers} followers</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">{engagement}</p>
        <Badge variant={trend === "up" ? "success" : trend === "down" ? "destructive" : "outline"} className="text-xs">
          {trend === "up" ? "↑" : trend === "down" ? "↓" : "–"} Engagement
        </Badge>
      </div>
    </div>
  )
}
