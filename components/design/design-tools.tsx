import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageIcon, Type, Square, Palette, Layers, Download, Share2 } from "lucide-react"

export function DesignTools() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Tools</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            <ImageIcon className="h-4 w-4 mr-2" />
            Images
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Type className="h-4 w-4 mr-2" />
            Text
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Square className="h-4 w-4 mr-2" />
            Shapes
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Palette className="h-4 w-4 mr-2" />
            Colors
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Layers className="h-4 w-4 mr-2" />
            Layers
          </Button>
        </div>

        <div className="pt-4 border-t space-y-2">
          <Button className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button variant="outline" className="w-full">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
