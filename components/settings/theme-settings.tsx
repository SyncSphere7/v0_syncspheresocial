"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const colorThemes = [
  { name: "Default", value: "default", primary: "#0f172a" },
  { name: "Purple", value: "purple", primary: "#7c3aed" },
  { name: "Green", value: "green", primary: "#10b981" },
  { name: "Blue", value: "blue", primary: "#3b82f6" },
  { name: "Red", value: "red", primary: "#ef4444" },
  { name: "Orange", value: "orange", primary: "#f97316" },
]

const fontOptions = [
  { name: "Inter (Default)", value: "inter" },
  { name: "Roboto", value: "roboto" },
  { name: "Poppins", value: "poppins" },
  { name: "Montserrat", value: "montserrat" },
]

export function ThemeSettings() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [colorTheme, setColorTheme] = useState("default")
  const [font, setFont] = useState("inter")
  const [mounted, setMounted] = useState(false)

  // Ensure we're mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Apply theme changes
  const applyTheme = () => {
    // Apply color theme
    document.documentElement.style.setProperty(
      "--primary-color",
      colorThemes.find((c) => c.value === colorTheme)?.primary || "#0f172a",
    )

    // Apply font
    document.body.className = document.body.className.replace(/font-\w+/, `font-${font}`)

    toast({
      title: "Theme applied",
      description: `Your theme settings have been updated`,
      duration: 3000,
    })
  }

  if (!mounted) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Mode</Label>
          <RadioGroup
            defaultValue={theme || resolvedTheme || "system"}
            onValueChange={(value) => {
              setTheme(value)
              toast({
                title: "Theme mode updated",
                description: `Theme changed to ${value} mode`,
                duration: 2000,
              })
            }}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" />
              <Label htmlFor="light">Light</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <Label htmlFor="dark">Dark</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="system" />
              <Label htmlFor="system">System</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Color Theme</Label>
          <div className="grid grid-cols-3 gap-2">
            {colorThemes.map((color) => (
              <Button
                key={color.value}
                variant={colorTheme === color.value ? "default" : "outline"}
                className="h-auto p-2 justify-start"
                onClick={() => setColorTheme(color.value)}
              >
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color.primary }} />
                <span className="text-xs">{color.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="font-select">Font</Label>
          <Select value={font} onValueChange={setFont}>
            <SelectTrigger id="font-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fontOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end">
          <Button onClick={applyTheme}>Apply Theme</Button>
        </div>
      </CardContent>
    </Card>
  )
}
