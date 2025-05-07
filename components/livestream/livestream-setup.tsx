"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, MicOff, Video, VideoOff, Settings, Users, Lock, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

// Simulating user subscription tier
const userSubscription = {
  tier: "pro", // "free", "pro", or "business"
  livestreamMinutes: 120, // minutes remaining this month
  maxQuality: "720p", // based on subscription
}

export function LivestreamSetup() {
  const [isMicOn, setIsMicOn] = useState(true)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isLive, setIsLive] = useState(false)
  const [selectedQuality, setSelectedQuality] = useState(userSubscription.maxQuality)

  const qualityOptions = [
    { value: "480p", label: "480p", available: true },
    { value: "720p", label: "720p", available: userSubscription.tier !== "free" },
    { value: "1080p", label: "1080p (HD)", available: userSubscription.tier === "business" },
    { value: "1440p", label: "1440p (2K)", available: userSubscription.tier === "business" },
  ]

  const handleGoLive = () => {
    if (userSubscription.tier === "free") {
      toast({
        title: "Subscription Required",
        description: "Livestreaming is available on Pro and Business plans. Upgrade to start streaming.",
        variant: "destructive",
      })
      return
    }

    setIsLive(!isLive)

    if (!isLive) {
      toast({
        title: "Going Live!",
        description: `You're now streaming to your selected platforms. ${userSubscription.livestreamMinutes} minutes remaining this month.`,
      })
    } else {
      toast({
        title: "Stream Ended",
        description: "Your livestream has ended. It will be available for replay shortly.",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Livestream Preview</CardTitle>
          {userSubscription.tier !== "free" ? (
            <Badge variant="outline" className="ml-2">
              {userSubscription.livestreamMinutes} minutes remaining
            </Badge>
          ) : (
            <Badge variant="destructive" className="ml-2">
              Pro Feature
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
          {isVideoOn ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=360&width=640&text=Camera Preview"
                alt="Camera Preview"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white">Camera is off</div>
          )}

          {isLive && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              LIVE
            </div>
          )}

          {userSubscription.tier === "free" && (
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white">
              <Lock className="h-8 w-8 mb-2" />
              <h3 className="text-lg font-medium">Livestreaming Locked</h3>
              <p className="text-sm text-center max-w-xs mt-2">
                Upgrade to Pro or Business plan to unlock multi-platform livestreaming
              </p>
              <Button className="mt-4" variant="default">
                Upgrade Now
              </Button>
            </div>
          )}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <Button variant={isMicOn ? "default" : "destructive"} size="icon" onClick={() => setIsMicOn(!isMicOn)}>
              {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>
            <Button
              variant={isVideoOn ? "default" : "destructive"}
              size="icon"
              onClick={() => setIsVideoOn(!isVideoOn)}
            >
              {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Users className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="basic">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Basic Settings</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="stream-title">Stream Title</Label>
              <Input
                id="stream-title"
                placeholder="Enter your stream title"
                defaultValue="My Multi-platform Livestream"
                disabled={userSubscription.tier === "free"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stream-description">Stream Description</Label>
              <Input
                id="stream-description"
                placeholder="Enter your stream description"
                defaultValue="Join me for this exciting livestream across multiple platforms!"
                disabled={userSubscription.tier === "free"}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant={isLive ? "destructive" : "default"} onClick={handleGoLive}>
                {isLive ? "End Stream" : "Go Live"}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="advanced" className="space-y-4 mt-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="video-quality">Video Quality</Label>
                {userSubscription.tier === "pro" && (
                  <Badge variant="outline" className="ml-2">
                    Up to 720p
                  </Badge>
                )}
                {userSubscription.tier === "business" && (
                  <Badge variant="outline" className="ml-2">
                    Up to 1080p
                  </Badge>
                )}
              </div>
              <select
                id="video-quality"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={selectedQuality}
                onChange={(e) => setSelectedQuality(e.target.value)}
                disabled={userSubscription.tier === "free"}
              >
                {qualityOptions.map((option) => (
                  <option key={option.value} value={option.value} disabled={!option.available}>
                    {option.label} {!option.available && "(Upgrade Required)"}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bitrate">Bitrate (kbps)</Label>
              <Input
                id="bitrate"
                type="number"
                defaultValue="3500"
                min="1000"
                max="8000"
                disabled={userSubscription.tier === "free"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="framerate">Frame Rate</Label>
              <select
                id="framerate"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={userSubscription.tier === "free"}
              >
                <option value="30">30 fps</option>
                <option value="60" disabled={userSubscription.tier !== "business"}>
                  60 fps {userSubscription.tier !== "business" && "(Business Plan Only)"}
                </option>
              </select>
            </div>

            {userSubscription.tier !== "business" && (
              <div className="bg-muted/50 p-3 rounded-md mt-4 flex items-start">
                <Sparkles className="h-4 w-4 text-primary mt-1 mr-2" />
                <div>
                  <p className="text-sm font-medium">Upgrade to Business</p>
                  <p className="text-xs text-muted-foreground">
                    Get access to 1080p HD streaming, 60fps, and unlimited streaming minutes.
                  </p>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
