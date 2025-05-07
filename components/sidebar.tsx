"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Calendar,
  Paintbrush,
  Video,
  Bot,
  Settings,
  LogOut,
  Target,
  CreditCard,
  User,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { useAuth } from "@/contexts/auth-context"

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Schedule",
    href: "/dashboard/schedule",
    icon: Calendar,
  },
  {
    name: "Design",
    href: "/dashboard/design",
    icon: Paintbrush,
  },
  {
    name: "Livestream",
    href: "/dashboard/livestream",
    icon: Video,
  },
  {
    name: "Ad Campaigns",
    href: "/dashboard/ads",
    icon: Target,
  },
  {
    name: "AI Assistant",
    href: "/dashboard/ai-assistant",
    icon: Bot,
  },
  {
    name: "Subscription",
    href: "/subscription",
    icon: CreditCard,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { signOut } = useAuth()

  return (
    <div className="hidden md:flex flex-col w-64 bg-background border-r h-screen">
      <div className="p-4 border-b">
        <Logo linkTo="/dashboard" height={36} width={36} />
      </div>
      <div className="flex-1 py-4 flex flex-col justify-between overflow-y-auto">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="px-2 mt-auto">
          <button
            onClick={() => signOut()}
            className="flex items-center w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
