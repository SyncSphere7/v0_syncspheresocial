import { AiChat } from "@/components/ai/ai-chat"
import { AiSuggestions } from "@/components/ai/ai-suggestions"
import { AiSettings } from "@/components/ai/ai-settings"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Assistant | SyncSphere Social",
}

export default function AiAssistantPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Assistant</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AiChat />
        </div>
        <div>
          <AiSuggestions />
          <div className="mt-6">
            <AiSettings />
          </div>
        </div>
      </div>
    </div>
  )
}
