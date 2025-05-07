import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LandingNav } from "@/components/landing-nav"
import { LandingFooter } from "@/components/landing-footer"

export const metadata: Metadata = {
  title: "Blog | SyncSphere Social",
  description: "Latest news, tips, and insights about social media management",
}

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Effective Social Media Management",
    description: "Learn how to streamline your social media workflow and increase engagement.",
    date: "May 7, 2025",
    category: "Tips & Tricks",
    image: "/placeholder.svg?height=400&width=600&text=Social+Media+Tips",
  },
  {
    id: 2,
    title: "How AI is Transforming Social Media Marketing",
    description: "Discover how artificial intelligence is changing the landscape of social media marketing.",
    date: "May 5, 2025",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600&text=AI+in+Marketing",
  },
  {
    id: 3,
    title: "The Power of Multi-Platform Livestreaming",
    description: "Why broadcasting to multiple platforms simultaneously is the future of live content.",
    date: "May 3, 2025",
    category: "Livestreaming",
    image: "/placeholder.svg?height=400&width=600&text=Livestreaming",
  },
  {
    id: 4,
    title: "Creating Engaging Social Media Graphics",
    description: "Design tips and tools to create eye-catching visuals for your social media posts.",
    date: "May 1, 2025",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600&text=Social+Media+Graphics",
  },
  {
    id: 5,
    title: "Measuring ROI on Your Social Media Campaigns",
    description: "How to track and analyze the return on investment for your social media efforts.",
    date: "April 28, 2025",
    category: "Analytics",
    image: "/placeholder.svg?height=400&width=600&text=Social+Media+ROI",
  },
  {
    id: 6,
    title: "Building a Consistent Brand Voice Across Platforms",
    description: "Strategies for maintaining a cohesive brand identity across different social networks.",
    date: "April 25, 2025",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600&text=Brand+Voice",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNav />

      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">SyncSphere Blog</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Latest news, tips, and insights about social media management and marketing.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="p-0" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More Articles</Button>
            </div>

            <div className="mx-auto max-w-md rounded-lg border bg-muted/50 p-6 text-center">
              <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="mt-2 text-muted-foreground">
                Get the latest social media tips and updates delivered straight to your inbox.
              </p>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}
