"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/components/ui/use-toast"

export function AiSettings() {
  const [settings, setSettings] = useState({
    autoSuggestions: true,
    contentAnalysis: true,
    budgetOptimization: true,
    aggressiveness: 50,
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => {
      const newValue = !prev[setting]

      // Show toast notification
      toast({
        title: `${setting.charAt(0).toUpperCase() + setting.slice(1).replace(/([A-Z])/g, " $1")}`,
        description: `${newValue ? "Enabled" : "Disabled"}`,
      })

      return {
        ...prev,
        [setting]: newValue,
      }
    })
  }

  const handleSliderChange = (value: number[]) => {
    setSettings((prev) => ({
      ...prev,
      aggressiveness: value[0],
    }))

    let description = "Balanced"
    if (value[0] < 30) description = "Conservative"
    else if (value[0] > 70) description = "Aggressive"

    toast({
      title: "AI Aggressiveness",
      description: `Set to ${description} (${value[0]}%)`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-suggestions" className="flex flex-col space-y-1">
            <span>Auto Suggestions</span>
            <span className="font-normal text-xs text-muted-foreground">Receive AI suggestions automatically</span>
          </Label>
          <Switch
            id="auto-suggestions"
            checked={settings.autoSuggestions}
            onCheckedChange={() => handleToggle("autoSuggestions")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="content-analysis" className="flex flex-col space-y-1">
            <span>Content Analysis</span>
            <span className="font-normal text-xs text-muted-foreground">Analyze post performance</span>
          </Label>
          <Switch
            id="content-analysis"
            checked={settings.contentAnalysis}
            onCheckedChange={() => handleToggle("contentAnalysis")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="budget-optimization" className="flex flex-col space-y-1">
            <span>Budget Optimization</span>
            <span className="font-normal text-xs text-muted-foreground">Get budget allocation suggestions</span>
          </Label>
          <Switch
            id="budget-optimization"
            checked={settings.budgetOptimization}
            onCheckedChange={() => handleToggle("budgetOptimization")}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="ai-aggressiveness">AI Aggressiveness</Label>
            <span className="text-sm text-muted-foreground">
              {settings.aggressiveness < 30 ? "Conservative" : settings.aggressiveness > 70 ? "Aggressive" : "Balanced"}
            </span>
          </div>
          <Slider
            id="ai-aggressiveness"
            defaultValue={[50]}
            value={[settings.aggressiveness]}
            max={100}
            step={1}
            onValueChange={handleSliderChange}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Conservative</span>
            <span>Aggressive</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
