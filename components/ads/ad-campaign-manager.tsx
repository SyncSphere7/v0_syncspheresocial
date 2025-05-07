"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { FileUpload } from "@/components/ui/file-upload"
import { toast } from "@/components/ui/use-toast"
import { CalendarIcon, Users, DollarSign, BarChart3, Sparkles } from "lucide-react"
import { format } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export function AdCampaignManager() {
  const [campaignName, setCampaignName] = useState("")
  const [objective, setObjective] = useState("")
  const [budget, setBudget] = useState("100")
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [adMedia, setAdMedia] = useState<File | null>(null)
  const [adText, setAdText] = useState("")
  const [ageRange, setAgeRange] = useState([18, 65])
  const [isAiOptimizing, setIsAiOptimizing] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState<{
    budget: string
    demographics: string
    platforms: string
  } | null>(null)

  const [selectedPlatforms, setSelectedPlatforms] = useState({
    facebook: true,
    instagram: true,
    twitter: false,
    tiktok: false,
    google: false,
  })

  const handlePlatformToggle = (platform: keyof typeof selectedPlatforms) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }))
  }

  const handleAiOptimize = () => {
    setIsAiOptimizing(true)

    // Simulate AI optimization
    setTimeout(() => {
      setAiSuggestions({
        budget:
          "Based on your objective and target audience, we recommend a daily budget of $25 for optimal reach and conversion.",
        demographics:
          "Your ad will perform best with adults aged 25-34 in urban areas with interests in technology and innovation.",
        platforms:
          "For your campaign objective, Instagram and Facebook will provide the best ROI. Consider allocating 60% to Instagram and 40% to Facebook.",
      })

      setIsAiOptimizing(false)

      toast({
        title: "AI Optimization Complete",
        description: "We've analyzed your campaign and provided recommendations.",
      })
    }, 2000)
  }

  const handleCreateCampaign = () => {
    // Validate inputs
    if (!campaignName.trim()) {
      toast({
        title: "Missing campaign name",
        description: "Please enter a name for your campaign",
        variant: "destructive",
      })
      return
    }

    if (!objective) {
      toast({
        title: "Missing objective",
        description: "Please select a campaign objective",
        variant: "destructive",
      })
      return
    }

    if (!startDate) {
      toast({
        title: "Missing start date",
        description: "Please select a start date for your campaign",
        variant: "destructive",
      })
      return
    }

    if (!adText.trim() && !adMedia) {
      toast({
        title: "Missing ad content",
        description: "Please add text or media to your ad",
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

    // Simulate campaign creation success
    toast({
      title: "Campaign created",
      description: `Your ${campaignName} campaign has been created and is pending review.`,
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Ad Campaign</CardTitle>
          <CardDescription>
            Set up your ad campaign across multiple platforms with AI-powered optimization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input
                  id="campaign-name"
                  placeholder="Summer Sale 2025"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="objective">Campaign Objective</Label>
                <Select value={objective} onValueChange={setObjective}>
                  <SelectTrigger id="objective">
                    <SelectValue placeholder="Select objective" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="awareness">Brand Awareness</SelectItem>
                    <SelectItem value="traffic">Website Traffic</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="leads">Lead Generation</SelectItem>
                    <SelectItem value="conversions">Conversions</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Daily Budget (USD)</Label>
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">$</span>
                  <Input id="budget" type="number" min="5" value={budget} onChange={(e) => setBudget(e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>End Date (Optional)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Platforms</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ad-facebook"
                      checked={selectedPlatforms.facebook}
                      onCheckedChange={() => handlePlatformToggle("facebook")}
                    />
                    <Label htmlFor="ad-facebook">Facebook</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ad-instagram"
                      checked={selectedPlatforms.instagram}
                      onCheckedChange={() => handlePlatformToggle("instagram")}
                    />
                    <Label htmlFor="ad-instagram">Instagram</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ad-twitter"
                      checked={selectedPlatforms.twitter}
                      onCheckedChange={() => handlePlatformToggle("twitter")}
                    />
                    <Label htmlFor="ad-twitter">Twitter/X</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ad-tiktok"
                      checked={selectedPlatforms.tiktok}
                      onCheckedChange={() => handlePlatformToggle("tiktok")}
                    />
                    <Label htmlFor="ad-tiktok">TikTok</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ad-google"
                      checked={selectedPlatforms.google}
                      onCheckedChange={() => handlePlatformToggle("google")}
                    />
                    <Label htmlFor="ad-google">Google Ads</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>
                  Target Age Range: {ageRange[0]} - {ageRange[1]}
                </Label>
                <Slider
                  defaultValue={ageRange}
                  min={13}
                  max={65}
                  step={1}
                  onValueChange={(value) => setAgeRange(value as [number, number])}
                  className="py-4"
                />
              </div>

              <Button variant="outline" className="w-full" onClick={handleAiOptimize} disabled={isAiOptimizing}>
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                {isAiOptimizing ? "Optimizing..." : "AI Optimize Campaign"}
              </Button>
            </div>
          </div>

          {aiSuggestions && (
            <Card className="bg-muted/50 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 text-primary" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <div className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-primary mt-0.5" />
                  <p className="text-sm">{aiSuggestions.budget}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-primary mt-0.5" />
                  <p className="text-sm">{aiSuggestions.demographics}</p>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-primary mt-0.5" />
                  <p className="text-sm">{aiSuggestions.platforms}</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Ad Creative</h3>

            <Tabs defaultValue="media" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="media">Media</TabsTrigger>
                <TabsTrigger value="text">Text</TabsTrigger>
              </TabsList>

              <TabsContent value="media" className="space-y-4 pt-4">
                <FileUpload
                  onFileSelect={(file) => setAdMedia(file)}
                  accept="image/*,video/*"
                  buttonText="Upload Ad Media"
                />
                <p className="text-sm text-muted-foreground">
                  Recommended dimensions: 1080x1080px (square), 1200x628px (landscape), or 1080x1920px (story)
                </p>
              </TabsContent>

              <TabsContent value="text" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="ad-text">Ad Text</Label>
                  <Textarea
                    id="ad-text"
                    placeholder="Write compelling ad copy here..."
                    value={adText}
                    onChange={(e) => setAdText(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="headline">Headline</Label>
                  <Input id="headline" placeholder="Attention-grabbing headline" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cta">Call to Action</Label>
                  <Select defaultValue="shop">
                    <SelectTrigger id="cta">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shop">Shop Now</SelectItem>
                      <SelectItem value="learn">Learn More</SelectItem>
                      <SelectItem value="sign-up">Sign Up</SelectItem>
                      <SelectItem value="contact">Contact Us</SelectItem>
                      <SelectItem value="download">Download</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Save as Draft</Button>
            <Button onClick={handleCreateCampaign}>Create Campaign</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
