"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Youtube, Twitch } from "lucide-react"

export function PlatformSelector() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Streaming Platforms</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="facebook" defaultChecked />
          <Label
            htmlFor="facebook"
            className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Facebook className="h-4 w-4 text-blue-600 mr-2" />
            Facebook
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="instagram" defaultChecked />
          <Label
            htmlFor="instagram"
            className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Instagram className="h-4 w-4 text-pink-600 mr-2" />
            Instagram
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="youtube" defaultChecked />
          <Label
            htmlFor="youtube"
            className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Youtube className="h-4 w-4 text-red-600 mr-2" />
            YouTube
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="twitch" />
          <Label
            htmlFor="twitch"
            className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Twitch className="h-4 w-4 text-purple-600 mr-2" />
            Twitch
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="tiktok" />
          <Label
            htmlFor="tiktok"
            className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                fill="#000000"
              />
            </svg>
            TikTok
          </Label>
        </div>
      </CardContent>
    </Card>
  )
}
