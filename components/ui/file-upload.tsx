"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface FileUploadProps {
  onFileSelect: (file: File) => void
  accept?: string
  maxSize?: number // in MB
  className?: string
  buttonText?: string
  customButton?: React.ReactNode
}

export function FileUpload({
  onFileSelect,
  accept = "image/*",
  maxSize = 5, // 5MB default
  className = "",
  buttonText = "Upload File",
  customButton,
}: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    const file = e.target.files?.[0]

    if (!file) return

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`)
      return
    }

    // Create preview for images
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }

    onFileSelect(file)
    toast({
      title: "File uploaded",
      description: `${file.name} has been selected`,
    })
  }

  const clearFile = () => {
    setPreview(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const promptForPermission = () => {
    // This will trigger the browser's permission dialog for accessing files
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // If a custom button is provided, use it
  if (customButton) {
    return (
      <div className={className}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept={accept}
          className="hidden"
          aria-label="Upload file"
        />
        <div onClick={promptForPermission}>{customButton}</div>
      </div>
    )
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept={accept}
        className="hidden"
        aria-label="Upload file"
      />

      {!preview ? (
        <div
          className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={promptForPermission}
        >
          <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
          <p className="mt-2 text-sm text-muted-foreground">Click to upload or drag and drop</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={(e) => {
              e.stopPropagation()
              promptForPermission()
            }}
          >
            {buttonText}
          </Button>
          {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
        </div>
      ) : (
        <div className="relative">
          <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-64 rounded-lg mx-auto" />
          <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={clearFile}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
