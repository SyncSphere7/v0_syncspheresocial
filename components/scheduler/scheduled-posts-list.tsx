import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Edit, Trash2 } from "lucide-react"

const scheduledPosts = [
  {
    id: 1,
    title: "New Product Launch",
    date: "May 7, 2025",
    time: "10:00 AM",
    platforms: ["facebook", "instagram", "twitter"],
    status: "scheduled",
    content: "Excited to announce our new product line! Stay tuned for more details.",
  },
  {
    id: 2,
    title: "Weekly Tips & Tricks",
    date: "May 8, 2025",
    time: "2:30 PM",
    platforms: ["instagram", "youtube"],
    status: "scheduled",
    content: "Check out our weekly tips and tricks to maximize your productivity!",
  },
  {
    id: 3,
    title: "Customer Spotlight",
    date: "May 9, 2025",
    time: "11:15 AM",
    platforms: ["facebook", "instagram"],
    status: "draft",
    content: "Meet our customer of the month and learn how they're using our products.",
  },
  {
    id: 4,
    title: "Industry News Roundup",
    date: "May 10, 2025",
    time: "9:00 AM",
    platforms: ["twitter", "facebook"],
    status: "scheduled",
    content: "Here's what's happening in the industry this week. #IndustryNews",
  },
]

export function ScheduledPostsList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Scheduled Posts</CardTitle>
        <Button size="sm">+ New Post</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scheduledPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{post.title}</h3>
                <Badge variant={post.status === "scheduled" ? "default" : "outline"}>{post.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{post.content}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1.5">
                  {post.platforms.includes("facebook") && <Facebook className="h-4 w-4 text-blue-600" />}
                  {post.platforms.includes("instagram") && <Instagram className="h-4 w-4 text-pink-600" />}
                  {post.platforms.includes("twitter") && <Twitter className="h-4 w-4 text-sky-500" />}
                  {post.platforms.includes("youtube") && <Youtube className="h-4 w-4 text-red-600" />}
                </div>
                <div className="text-sm text-muted-foreground">
                  {post.date} at {post.time}
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
