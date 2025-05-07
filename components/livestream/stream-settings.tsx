import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function StreamSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stream Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="chat-enabled" className="flex flex-col space-y-1">
            <span>Enable Chat</span>
            <span className="font-normal text-xs text-muted-foreground">Allow viewers to chat during stream</span>
          </Label>
          <Switch id="chat-enabled" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="comments-enabled" className="flex flex-col space-y-1">
            <span>Show Comments</span>
            <span className="font-normal text-xs text-muted-foreground">Display comments on stream</span>
          </Label>
          <Switch id="comments-enabled" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="ai-moderation" className="flex flex-col space-y-1">
            <span>AI Moderation</span>
            <span className="font-normal text-xs text-muted-foreground">Filter inappropriate comments</span>
          </Label>
          <Switch id="ai-moderation" defaultChecked />
        </div>
        <div className="space-y-2">
          <Label htmlFor="stream-key">Stream Key</Label>
          <div className="flex space-x-2">
            <Input id="stream-key" type="password" value="sk_live_123456789" readOnly />
            <Button variant="outline" size="sm">
              Copy
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Keep your stream key private. Never share it with anyone.</p>
        </div>
      </CardContent>
    </Card>
  )
}
