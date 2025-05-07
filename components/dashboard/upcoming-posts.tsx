import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const upcomingPosts = [
  {
    id: 1,
    title: "New Product Launch",
    date: "May 7, 2025",
    time: "10:00 AM",
    platforms: ["facebook", "instagram", "twitter"],
    status: "scheduled",
  },
  {
    id: 2,
    title: "Weekly Tips & Tricks",
    date: "May 8, 2025",
    time: "2:30 PM",
    platforms: ["instagram", "youtube"],
    status: "scheduled",
  },
  {
    id: 3,
    title: "Customer Spotlight",
    date: "May 9, 2025",
    time: "11:15 AM",
    platforms: ["facebook", "instagram"],
    status: "draft",
  },
  {
    id: 4,
    title: "Industry News Roundup",
    date: "May 10, 2025",
    time: "9:00 AM",
    platforms: ["twitter", "facebook"],
    status: "scheduled",
  },
]

export function UpcomingPosts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingPosts.map((post) => (
            <div key={post.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {post.date} at {post.time}
                </p>
                <div className="flex mt-2 space-x-1.5">
                  {post.platforms.includes("facebook") && <Facebook className="h-4 w-4 text-blue-600" />}
                  {post.platforms.includes("instagram") && <Instagram className="h-4 w-4 text-pink-600" />}
                  {post.platforms.includes("twitter") && <Twitter className="h-4 w-4 text-sky-500" />}
                  {post.platforms.includes("youtube") && <Youtube className="h-4 w-4 text-red-600" />}
                </div>
              </div>
              <Badge variant={post.status === "scheduled" ? "default" : "outline"}>{post.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
