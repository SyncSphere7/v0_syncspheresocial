import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DesignTemplates() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Templates</CardTitle>
        <Button variant="outline" size="sm">
          Browse All
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="social">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="ads">Ads</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
          <TabsContent value="social" className="mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=200&text=Template ${i}`}
                      alt={`Template ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">Social Template {i}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="stories" className="mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-[9/16] bg-muted rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=320&width=180&text=Story ${i}`}
                      alt={`Story ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">Story Template {i}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ads" className="mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=180&width=320&text=Ad ${i}`}
                      alt={`Ad ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">Ad Template {i}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="custom" className="mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=200&text=Custom ${i}`}
                      alt={`Custom ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">Custom Template {i}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
