"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Link, Smile } from "lucide-react"
import { format } from "date-fns"
import { FileUpload } from "@/components/ui/file-upload"
import { toast } from "@/components/ui/use-toast"

export function PostScheduler() {
  const [date, setDate] = useState<Date>()
  const [postContent, setPostContent] = useState("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    facebook: false,
    instagram: true,
    twitter: true,
    tiktok: false,
    youtube: false,
  })
  const [mediaFile, setMediaFile] = useState<File | null>(null)

  const handlePlatformToggle = (platform: keyof typeof selectedPlatforms) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }))
  }

  const handleSchedulePost = () => {
    // Validate inputs
    if (!postContent.trim()) {
      toast({
        title: "Missing content",
        description: "Please add some text to your post",
        variant: "destructive",
      })
      return
    }

    if (!date) {
      toast({
        title: "Missing date",
        description: "Please select a date for your post",
        variant: "destructive",
      })
      return
    }

    if (!selectedTime) {
      toast({
        title: "Missing time",
        description: "Please select a time for your post",
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

    // Simulate scheduling success
    toast({
      title: "Post scheduled",
      description: `Your post has been scheduled for ${format(date, "PPP")} at ${selectedTime}`,
    })

    // Reset form
    setPostContent("")
    setMediaFile(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="text">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="text" className="space-y-4 mt-4">
            <Textarea
              placeholder="What's on your mind?"
              className="min-h-[120px]"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <div className="flex items-center space-x-2">
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
            </div>
          </TabsContent>
          <TabsContent value="image" className="space-y-4 mt-4">
            <FileUpload onFileSelect={(file) => setMediaFile(file)} accept="image/*" buttonText="Upload Image" />
            <Textarea
              placeholder="Add a caption..."
              className="min-h-[80px]"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="video" className="space-y-4 mt-4">
            <FileUpload
              onFileSelect={(file) => setMediaFile(file)}
              accept="video/*"
              buttonText="Upload Video"
              maxSize={100}
            />
            <Textarea
              placeholder="Add a description..."
              className="min-h-[80px]"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
        </div>

        <div className="flex justify-end space-x-2 mt-6">
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
          <Button onClick={handleSchedulePost}>Schedule Post</Button>
        </div>
      </CardContent>
    </Card>
  )
}
