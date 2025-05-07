import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function PlatformStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Facebook className="h-5 w-5 text-blue-600 mr-2" />
              <span>Facebook</span>
            </div>
            <div className="text-sm font-medium">12.4K followers</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Instagram className="h-5 w-5 text-pink-600 mr-2" />
              <span>Instagram</span>
            </div>
            <div className="text-sm font-medium">8.7K followers</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Twitter className="h-5 w-5 text-sky-500 mr-2" />
              <span>Twitter/X</span>
            </div>
            <div className="text-sm font-medium">5.2K followers</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Youtube className="h-5 w-5 text-red-600 mr-2" />
              <span>YouTube</span>
            </div>
            <div className="text-sm font-medium">3.8K subscribers</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
