import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export function AiInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start">
            <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium">Best time to post</p>
              <p className="text-muted-foreground">Your audience is most active between 6-8 PM on weekdays.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium">Content suggestion</p>
              <p className="text-muted-foreground">
                Try more video content - your video posts get 2.3x more engagement.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium">Budget optimization</p>
              <p className="text-muted-foreground">Reallocate 20% of Facebook budget to Instagram for better ROI.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
