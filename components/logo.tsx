"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

interface LogoProps {
  className?: string
  imageClassName?: string
  textClassName?: string
  linkTo?: string | null
  variant?: "default" | "transparent" | "white"
  showText?: boolean
  width?: number
  height?: number
}

export function Logo({
  className,
  imageClassName,
  textClassName,
  linkTo = null,
  variant = "default",
  showText = true,
  width = 32,
  height = 32,
}: LogoProps) {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

  // Determine which logo image to use based on variant and theme
  let logoSrc = "/images/logo.png"

  if (variant === "transparent") {
    logoSrc = "/images/logo-transparent.png"
  } else if (variant === "white" || isDarkMode) {
    // Use white logo in dark mode or when white variant is explicitly requested
    logoSrc = "/images/logo-transparent.png"
  }

  const logoContent = (
    <div className={`flex items-center ${className || ""}`}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="SyncSphere Social Logo"
        width={width}
        height={height}
        className={imageClassName || ""}
      />
      {showText && (
        <div className={`ml-2 font-bold ${textClassName || ""}`}>
          <span className="text-[#00BCD4] dark:text-[#00BCD4]">Sync</span>
          <span className="text-[#00BCD4] dark:text-[#00BCD4]">Sphere</span>
          <span className="text-[#1E3A8A] dark:text-[#4F75D3]"> SOCIAL</span>
        </div>
      )}
    </div>
  )

  // Only wrap in Link if linkTo is provided and not null
  if (linkTo) {
    return <Link href={linkTo}>{logoContent}</Link>
  }

  return logoContent
}
