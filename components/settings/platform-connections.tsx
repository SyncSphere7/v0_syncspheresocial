import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Twitter, Youtube, Twitch } from "lucide-react"

const connectedPlatforms = [
  {
    id: 1,
    name: "Facebook",
    icon: Facebook,
    color: "text-blue-600",
    account: "John Doe",
    status: "connected",
  },
  {
    id: 2,
    name: "Instagram",
    icon: Instagram,
    color: "text-pink-600",
    account: "@johndoe",
    status: "connected",
  },
  {
    id: 3,
    name: "Twitter/X",
    icon: Twitter,
    color: "text-sky-500",
    account: "@johndoe",
    status: "connected",
  },
  {
    id: 4,
    name: "YouTube",
    icon: Youtube,
    color: "text-red-600",
    account: "John Doe",
    status: "disconnected",
  },
  {
    id: 5,
    name: "TikTok",
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
          fill="#000000"
        />
      </svg>
    ),
    color: "text-black",
    account: "",
    status: "disconnected",
  },
  {
    id: 6,
    name: "Twitch",
    icon: Twitch,
    color: "text-purple-600",
    account: "",
    status: "disconnected",
  },
]

export function PlatformConnections() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Connections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {connectedPlatforms.map((platform) => (
            <div key={platform.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center">
                <platform.icon className={`h-5 w-5 ${platform.color} mr-3`} />
                <div>
                  <p className="font-medium">{platform.name}</p>
                  {platform.account && <p className="text-sm text-muted-foreground">{platform.account}</p>}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={platform.status === "connected" ? "default" : "outline"}>
                  {platform.status === "connected" ? "Connected" : "Disconnected"}
                </Badge>
                <Button variant="outline" size="sm">
                  {platform.status === "connected" ? "Disconnect" : "Connect"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
