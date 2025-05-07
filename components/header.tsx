"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Bell, Menu, Search, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Logo } from "@/components/logo"
import { useAuth } from "@/contexts/auth-context"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const pathname = usePathname()
  const { user, profile, signOut } = useAuth()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Get user initials for avatar fallback
  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase()
    }
    return user?.email?.charAt(0).toUpperCase() || "U"
  }

  return (
    <header className="bg-background border-b py-3 px-4 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div className="md:hidden flex items-center justify-center flex-1">
        <Logo linkTo="/dashboard" height={24} width={24} />
      </div>

      <div className="hidden md:flex md:w-72 lg:w-96">
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8 w-full bg-muted/50" />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {notifications}
            </Badge>
          )}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full" aria-label="User menu">
              <Avatar className="h-8 w-8">
                <AvatarImage src={profile?.avatar_url || ""} alt={profile?.full_name || "User"} />
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{profile?.full_name || user?.email || "My Account"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/subscription">Subscription</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Logo linkTo={null} height={28} width={28} />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <div className="relative w-full mb-6">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-8 w-full bg-muted/50" />
              </div>
              <nav className="space-y-1">
                <MobileNavItem href="/dashboard" icon={<User className="h-5 w-5" />} label="Dashboard" />
                <MobileNavItem href="/dashboard/schedule" icon={<User className="h-5 w-5" />} label="Schedule" />
                <MobileNavItem href="/dashboard/design" icon={<User className="h-5 w-5" />} label="Design" />
                <MobileNavItem href="/dashboard/livestream" icon={<User className="h-5 w-5" />} label="Livestream" />
                <MobileNavItem href="/dashboard/ads" icon={<User className="h-5 w-5" />} label="Ad Campaigns" />
                <MobileNavItem
                  href="/dashboard/ai-assistant"
                  icon={<User className="h-5 w-5" />}
                  label="AI Assistant"
                />
                <MobileNavItem href="/subscription" icon={<User className="h-5 w-5" />} label="Subscription" />
                <MobileNavItem href="/dashboard/profile" icon={<User className="h-5 w-5" />} label="Profile" />
                <MobileNavItem href="/dashboard/settings" icon={<User className="h-5 w-5" />} label="Settings" />
              </nav>
            </div>
            <div className="mt-auto p-4 border-t">
              <Button variant="destructive" className="w-full" onClick={() => signOut()}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Helper component for mobile navigation items
function MobileNavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors ${
        isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  )
}
