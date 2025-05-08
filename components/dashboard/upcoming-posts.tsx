import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Edit, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

const upcomingPosts = [
  {
    id: 1,
    content: "Excited to announce our new feature release! Stay tuned for more updates. #ProductLaunch #Innovation",
    scheduledFor: "2023-06-15T10:00:00",
    platforms: ["twitter", "facebook"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content: "Check out our latest blog post on social media strategies for 2023!",
    scheduledFor: "2023-06-16T14:30:00",
    platforms: ["instagram", "facebook", "twitter"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "Join us for a live Q&A session this Friday at 3 PM EST. We'll be discussing industry trends and answering your questions!",
    scheduledFor: "2023-06-17T15:00:00",
    platforms: ["instagram"],
    image: null,
  },
]

export function UpcomingPosts() {
  return (
    <div className="space-y-4">
      {upcomingPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <Calendar className="h-12 w-12 text-muted-foreground mb-2" />
          <h3 className="text-lg font-medium">No upcoming posts</h3>
          <p className="text-sm text-muted-foreground mb-4">You don't have any posts scheduled for the next 7 days.</p>
          <Button asChild>
            <Link href="/dashboard/schedule">Schedule a Post</Link>
          </Button>
        </div>
      ) : (
        upcomingPosts.map((post) => (
          <div key={post.id} className="flex items-start gap-4 p-4 border rounded-lg">
            {post.image && (
              <Avatar className="h-12 w-12 rounded-md">
                <AvatarImage src={post.image || "/placeholder.svg"} alt="Post image" />
                <AvatarFallback>Post</AvatarFallback>
              </Avatar>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm line-clamp-2">{post.content}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {new Date(post.scheduledFor).toLocaleString(undefined, {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </div>
                <div className="flex gap-1">
                  {post.platforms.includes("twitter") && (
                    <Badge variant="outline" className="h-5 px-1">
                      <Twitter className="h-3 w-3" />
                    </Badge>
                  )}
                  {post.platforms.includes("facebook") && (
                    <Badge variant="outline" className="h-5 px-1">
                      <Facebook className="h-3 w-3" />
                    </Badge>
                  )}
                  {post.platforms.includes("instagram") && (
                    <Badge variant="outline" className="h-5 px-1">
                      <Instagram className="h-3 w-3" />
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" asChild>
              <Link href={`/dashboard/schedule?edit=${post.id}`}>
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit post</span>
              </Link>
            </Button>
          </div>
        ))
      )}
    </div>
  )
}
