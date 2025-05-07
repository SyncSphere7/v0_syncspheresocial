import { DesignEditor } from "@/components/design/design-editor"
import { DesignTemplates } from "@/components/design/design-templates"
import { DesignTools } from "@/components/design/design-tools"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design Graphics | SyncSphere Social",
}

export default function DesignPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Design Graphics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <DesignTools />
        </div>
        <div className="lg:col-span-3">
          <DesignEditor />
        </div>
      </div>
      <DesignTemplates />
    </div>
  )
}
