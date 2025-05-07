"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

const suggestions = [
  {
    id: 1,
    title: "Optimize Posting Schedule",
    description: "Adjust your posting times based on audience activity patterns.",
    action: "Apply this suggestion to automatically update your posting schedule.",
  },
  {
    id: 2,
    title: "Content Mix Recommendation",
    description: "Increase video content by 30% to match current engagement trends.",
    action: "Update your content calendar with this recommendation.",
  },
  {
    id: 3,
    title: "Budget Reallocation",
    description: "Shift 20% of Facebook budget to Instagram for better ROI.",
    action: "Apply this budget change to your ad campaigns.",
  },
  {
    id: 4,
    title: "Hashtag Strategy",
    description: "Use these trending hashtags in your next posts for better reach.",
    action: "Copy these hashtags to your clipboard.",
  },
]

export function AiSuggestions() {
  const handleApplySuggestion = (id: number) => {
    const suggestion = suggestions.find((s) => s.id === id)
    if (suggestion) {
      toast({
        title: "Suggestion Applied",
        description: `${suggestion.title} has been applied to your account.`,
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Suggestions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-start p-3 bg-muted/50 rounded-lg">
            <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div className="space-y-1 w-full">
              <p className="font-medium">{suggestion.title}</p>
              <p className="text-sm text-muted-foreground">{suggestion.description}</p>
              <Button
                variant="link"
                className="p-0 h-auto text-sm"
                onClick={() => handleApplySuggestion(suggestion.id)}
              >
                Apply Suggestion
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
