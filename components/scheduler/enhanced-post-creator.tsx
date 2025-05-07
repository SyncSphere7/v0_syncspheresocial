"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUpload } from "@/components/ui/file-upload"
import { toast } from "@/components/ui/use-toast"
import { CalendarIcon, Link, Smile, ImageIcon, Bot, X, Clock, Send, Sparkles } from "lucide-react"
import { format } from "date-fns"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type MediaItem = {
  id: string
  type: "image" | "video"
  file: File
  preview: string
}

type PostMode = "now" | "schedule"

export function EnhancedPostCreator() {
  const [postContent, setPostContent] = useState("")
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [date, setDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [postMode, setPostMode] = useState<PostMode>("now")
  const [aiSuggestion, setAiSuggestion] = useState("")
  const [isAiGenerating, setIsAiGenerating] = useState(false)
  const [showAiDialog, setShowAiDialog] = useState(false)
  const [aiPrompt, setAiPrompt] = useState("")

  const [selectedPlatforms, setSelectedPlatforms] = useState({
    facebook: false,
    instagram: true,
    twitter: true,
    tiktok: false,
    youtube: false,
  })

  const handlePlatformToggle = (platform: keyof typeof selectedPlatforms) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }))
  }

  const handleAddMedia = (file: File) => {
    const id = Math.random().toString(36).substring(2, 9)
    const type = file.type.startsWith("image/") ? "image" : "video"
    const preview = URL.createObjectURL(file)

    setMediaItems((prev) => [...prev, { id, type, file, preview }])

    toast({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} added`,
      description: `${file.name} has been added to your post`,
    })
  }

  const handleRemoveMedia = (id: string) => {
    setMediaItems((prev) => {
      const filtered = prev.filter((item) => item.id !== id)
      return filtered
    })
  }

  const generateAiSuggestion = () => {
    setIsAiGenerating(true)

    // Simulate AI generating content
    setTimeout(() => {
      const suggestions = [
        "Check out our latest product launch! 🚀 We're excited to introduce something that will revolutionize your experience. #Innovation #NewProduct",
        "We're thrilled to announce our newest feature! It's designed to make your life easier and more productive. Try it today! #ProductUpdate #Innovation",
        "Have you been looking for a solution to [common problem]? Look no further! Our product is designed to address exactly that. #ProblemSolved #Innovation",
        "Friday motivation: Remember that every small step counts toward your bigger goals. What are you working on today? #FridayMotivation #Goals",
      ]

      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)]
      setAiSuggestion(randomSuggestion)
      setIsAiGenerating(false)
    }, 1500)
  }

  const handleAiPrompt = () => {
    setIsAiGenerating(true)

    // Simulate AI generating content based on prompt
    setTimeout(() => {
      const generatedContent = `Here's a post based on your request: "${aiPrompt}"\n\n${aiPrompt.includes("product") ? "Introducing our amazing new product that solves real problems!" : "We're excited to share our latest update with our amazing community!"} #${aiPrompt.split(" ")[0]} #Innovation`

      setAiSuggestion(generatedContent)
      setIsAiGenerating(false)
      setShowAiDialog(false)
    }, 2000)
  }

  const handlePost = () => {
    // Validate inputs
    if (!postContent.trim() && mediaItems.length === 0) {
      toast({
        title: "Missing content",
        description: "Please add some text or media to your post",
        variant: "destructive",
      })
      return
    }

    if (postMode === "schedule" && (!date || !selectedTime)) {
      toast({
        title: "Missing schedule information",
        description: "Please select a date and time for your scheduled post",
        variant: "destructive",
      })
      return
    }

    const activePlatforms = Object.entries(selectedPlatforms)
      .filter(([_, isSelected]) => isSelected)
      .map(([platform]) => platform)

    if (activePlatforms.length === 0) {
      toast({
        title: "No platforms selected",
        description: "Please select at least one platform",
        variant: "destructive",
      })
      return
    }

    // Simulate posting success
    toast({
      title: postMode === "now" ? "Post published" : "Post scheduled",
      description:
        postMode === "now"
          ? `Your post has been published to ${activePlatforms.join(", ")}`
          : `Your post has been scheduled for ${format(date!, "PPP")} at ${selectedTime}`,
    })

    // Reset form
    setPostContent("")
    setMediaItems([])
    if (postMode === "schedule") {
      setDate(undefined)
      setSelectedTime("")
    }
  }

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Create Post</CardTitle>
        <Tabs value={postMode} onValueChange={(value) => setPostMode(value as PostMode)} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="now" className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Post Now
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Schedule
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-4">
            <Textarea
              placeholder="What's on your mind?"
              className="min-h-[120px] text-base"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />

            {/* Media Preview Section */}
            {mediaItems.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {mediaItems.map((item) => (
                  <div key={item.id} className="relative rounded-md overflow-hidden aspect-square">
                    {item.type === "image" ? (
                      <img
                        src={item.preview || "/placeholder.svg"}
                        alt="Media preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video src={item.preview} className="w-full h-full object-cover" controls />
                    )}
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 h-6 w-6 rounded-full"
                      onClick={() => handleRemoveMedia(item.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* AI Suggestion */}
            {aiSuggestion && (
              <div className="bg-muted/50 p-3 rounded-md relative">
                <div className="flex items-start gap-2">
                  <Bot className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1">AI Suggestion</p>
                    <p className="text-sm">{aiSuggestion}</p>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <Button variant="outline" size="sm" onClick={() => setPostContent(aiSuggestion)}>
                    Use Suggestion
                  </Button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <FileUpload onFileSelect={handleAddMedia} accept="image/*,video/*" buttonText="" className="w-auto">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Add Media
                </Button>
              </FileUpload>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast({
                    title: "Feature coming soon",
                    description: "This feature will be available in the next update",
                  })
                }}
              >
                <Link className="h-4 w-4 mr-2" />
                Add Link
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setPostContent((prev) => prev + " 😊")
                }}
              >
                <Smile className="h-4 w-4 mr-2" />
                Add Emoji
              </Button>

              <Dialog open={showAiDialog} onOpenChange={setShowAiDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <Sparkles className="h-4 w-4 mr-2 text-primary" />
                    AI Assist
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>AI Post Assistant</DialogTitle>
                    <DialogDescription>
                      Describe what kind of post you want to create, and our AI will help you craft it.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <Textarea
                      placeholder="E.g., Write a post announcing our new product launch with excitement"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleAiPrompt} disabled={isAiGenerating || !aiPrompt.trim()}>
                        {isAiGenerating ? "Generating..." : "Generate Post"}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="outline" size="sm" onClick={generateAiSuggestion} disabled={isAiGenerating}>
                <Bot className="h-4 w-4 mr-2" />
                {isAiGenerating ? "Generating..." : "Suggest Content"}
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Platforms</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="facebook"
                  checked={selectedPlatforms.facebook}
                  onCheckedChange={() => handlePlatformToggle("facebook")}
                />
                <Label htmlFor="facebook">Facebook</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="instagram"
                  checked={selectedPlatforms.instagram}
                  onCheckedChange={() => handlePlatformToggle("instagram")}
                />
                <Label htmlFor="instagram">Instagram</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="twitter"
                  checked={selectedPlatforms.twitter}
                  onCheckedChange={() => handlePlatformToggle("twitter")}
                />
                <Label htmlFor="twitter">Twitter/X</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="tiktok"
                  checked={selectedPlatforms.tiktok}
                  onCheckedChange={() => handlePlatformToggle("tiktok")}
                />
                <Label htmlFor="tiktok">TikTok</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="youtube"
                  checked={selectedPlatforms.youtube}
                  onCheckedChange={() => handlePlatformToggle("youtube")}
                />
                <Label htmlFor="youtube">YouTube</Label>
              </div>
            </div>
          </div>

          {postMode === "schedule" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Schedule Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Schedule Time</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00">9:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM</SelectItem>
                    <SelectItem value="21:00">9:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>AI Optimization</Label>
                <Select defaultValue="recommended">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Use AI recommended time</SelectItem>
                    <SelectItem value="manual">Use manual time</SelectItem>
                    <SelectItem value="optimize">Optimize for each platform</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          {postMode === "schedule" && (
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Draft saved",
                  description: "Your post has been saved as a draft",
                })
              }}
            >
              Save as Draft
            </Button>
          )}
          <Button onClick={handlePost}>{postMode === "now" ? "Post Now" : "Schedule Post"}</Button>
        </div>
      </CardContent>
    </Card>
  )
}
