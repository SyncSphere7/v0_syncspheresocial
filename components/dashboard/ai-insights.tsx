import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export function AiInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Insights</CardTitle>
        <CardDescription>Smart recommendations to improve your social media strategy</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <InsightItem
          icon={<TrendingUp className="h-4 w-4" />}
          title="Engagement Opportunity"
          description="Your posts with images get 2.3x more engagement. Consider adding more visual content."
        />
        <InsightItem
          icon={<Users className="h-4 w-4" />}
          title="Audience Growth"
          description="Your follower growth is 15% higher when posting between 5-7 PM."
        />
        <InsightItem
          icon={<Lightbulb className="h-4 w-4" />}
          title="Content Suggestion"
          description="Try using more question-based captions to increase comments by up to 30%."
        />
        <Button variant="outline" className="w-full" asChild>
          <Link href="/dashboard/ai-assistant">
            Get More Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function InsightItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
