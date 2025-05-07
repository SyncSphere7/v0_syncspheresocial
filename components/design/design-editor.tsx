"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ImageIcon,
  Type,
  Square,
  Circle,
  Triangle,
  Lock,
  Sparkles,
} from "lucide-react"
import { FileUpload } from "@/components/ui/file-upload"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Simulating user subscription tier
const userSubscription = {
  tier: "free", // "free", "pro", or "business"
  designsRemaining: 3, // designs remaining this month
  designsLimit: 5, // total designs allowed
  templates: ["basic"], // templates available: "basic", "premium", "custom"
}

export function DesignEditor() {
  const [canvasSize, setCanvasSize] = useState({ width: 1080, height: 1080 })
  const [activeTab, setActiveTab] = useState("canvas")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null)
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false)

  const handleCanvasSizeChange = (preset: string) => {
    switch (preset) {
      case "instagram":
        setCanvasSize({ width: 1080, height: 1080 })
        toast({ title: "Canvas size set to Instagram Post (1080×1080)" })
        break
      case "facebook":
        setCanvasSize({ width: 1200, height: 630 })
        toast({ title: "Canvas size set to Facebook Post (1200×630)" })
        break
      case "twitter":
        setCanvasSize({ width: 1600, height: 900 })
        toast({ title: "Canvas size set to Twitter Post (1600×900)" })
        break
      case "custom":
        if (userSubscription.tier === "free") {
          setShowUpgradePrompt(true)
          toast({
            title: "Feature Locked",
            description: "Custom sizes are available on Pro and Business plans",
            variant: "destructive",
          })
        } else {
          // You could open a dialog here for custom dimensions
          toast({ title: "Custom size", description: "Custom sizing will be available in the next update" })
        }
        break
    }
  }

  const handleSaveDesign = () => {
    if (userSubscription.designsRemaining <= 0) {
      toast({
        title: "Design Limit Reached",
        description: `You've used all ${userSubscription.designsLimit} designs in your ${userSubscription.tier} plan. Upgrade for more.`,
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Design Saved",
      description: `${userSubscription.designsRemaining - 1} designs remaining this month.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Design Editor</CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              {userSubscription.designsRemaining}/{userSubscription.designsLimit} Designs
            </Badge>
            {userSubscription.tier === "free" && (
              <Button variant="outline" size="sm" className="text-xs">
                <Sparkles className="h-3 w-3 mr-1" /> Upgrade
              </Button>
            )}
          </div>
        </div>
        <div className="mt-2">
          <Progress value={(userSubscription.designsRemaining / userSubscription.designsLimit) * 100} className="h-1" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="canvas" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="canvas">Canvas</TabsTrigger>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="elements">Elements</TabsTrigger>
          </TabsList>
          <div className="mt-4 flex flex-col items-center">
            <div
              className="border rounded-lg relative"
              style={{
                width: "100%",
                height: 500,
                maxWidth: 500,
                aspectRatio: `${canvasSize.width} / ${canvasSize.height}`,
                backgroundColor: backgroundColor,
                backgroundImage: backgroundImage ? `url(${URL.createObjectURL(backgroundImage)})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Canvas content would go here */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                {activeTab === "canvas" && "Drag elements to the canvas"}
                {activeTab === "text" && "Click to add text"}
                {activeTab === "elements" && "Click to add shapes"}
              </div>
            </div>

            <div className="w-full mt-4 space-y-4">
              {activeTab === "canvas" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Canvas Size</Label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleCanvasSizeChange("instagram")}>
                        Instagram Post
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleCanvasSizeChange("facebook")}>
                        Facebook Post
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleCanvasSizeChange("twitter")}>
                        Twitter Post
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleCanvasSizeChange("custom")}>
                        Custom
                        {userSubscription.tier === "free" && <Lock className="h-3 w-3 ml-1" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Background</Label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "#ff5555",
                        "#5555ff",
                        "#55aa55",
                        "#ffaa55",
                        "#aa55aa",
                        "linear-gradient(to right, #ff5555, #ffaa55)",
                      ].map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full cursor-pointer"
                          style={{ background: color }}
                          onClick={() => {
                            setBackgroundColor(color)
                            toast({ title: "Background color changed" })
                          }}
                        />
                      ))}
                      <div className="mt-2 w-full">
                        <FileUpload
                          onFileSelect={(file) => {
                            setBackgroundImage(file)
                            toast({ title: "Background image set" })
                          }}
                          accept="image/*"
                          buttonText="Upload Background"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "text" && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toast({ title: "Heading added", description: "Click and drag to position" })}
                    >
                      Add Heading
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toast({ title: "Subheading added", description: "Click and drag to position" })}
                    >
                      Add Subheading
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toast({ title: "Body text added", description: "Click and drag to position" })}
                    >
                      Add Body Text
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="ghost" size="icon">
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Underline className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <AlignRight className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Type className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Font Size</Label>
                    <Slider
                      defaultValue={[16]}
                      max={72}
                      step={1}
                      onValueChange={(value) => {
                        toast({ title: `Font size: ${value[0]}px` })
                      }}
                    />
                  </div>
                </div>
              )}

              {activeTab === "elements" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <Button
                      variant="outline"
                      className="h-16 flex flex-col"
                      onClick={() => toast({ title: "Square added", description: "Click and drag to position" })}
                    >
                      <Square className="h-6 w-6 mb-1" />
                      <span className="text-xs">Square</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 flex flex-col"
                      onClick={() => toast({ title: "Circle added", description: "Click and drag to position" })}
                    >
                      <Circle className="h-6 w-6 mb-1" />
                      <span className="text-xs">Circle</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 flex flex-col"
                      onClick={() => toast({ title: "Triangle added", description: "Click and drag to position" })}
                    >
                      <Triangle className="h-6 w-6 mb-1" />
                      <span className="text-xs">Triangle</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 flex flex-col"
                      onClick={() => {
                        if (userSubscription.tier === "free" && userSubscription.designsRemaining < 2) {
                          toast({
                            title: "Feature Limited",
                            description: "Upgrade to add unlimited images to your designs",
                            variant: "destructive",
                          })
                          return
                        }
                        toast({ title: "Image element added", description: "Upload an image to add to your design" })
                      }}
                    >
                      <ImageIcon className="h-6 w-6 mb-1" />
                      <span className="text-xs">Image</span>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Element Color</Label>
                    <div className="flex flex-wrap gap-2">
                      {["#ff5555", "#5555ff", "#55aa55", "#ffaa55", "#aa55aa", "#000000"].map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full cursor-pointer"
                          style={{ backgroundColor: color }}
                          onClick={() => toast({ title: "Element color changed" })}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Tabs>

        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSaveDesign}>Save Design</Button>
        </div>

        {userSubscription.tier === "free" && (
          <div className="mt-4 bg-muted/50 p-3 rounded-md flex items-start">
            <Sparkles className="h-4 w-4 text-primary mt-1 mr-2" />
            <div>
              <p className="text-sm font-medium">Upgrade for unlimited designs</p>
              <p className="text-xs text-muted-foreground">
                Pro plan includes 50 designs/month, premium templates, and custom sizes.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
