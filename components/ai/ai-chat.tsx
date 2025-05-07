"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, Send, User, Lock, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

// Simulating user subscription tier
const userSubscription = {
  tier: "free", // "free", "pro", or "business"
  aiRequestsRemaining: 2, // AI requests remaining this month
  aiRequestsLimit: 3, // total AI requests allowed per week/month
}

// AI response templates based on keywords
const aiResponses: Record<string, string> = {
  hello: "Hello! I'm your AI assistant. How can I help with your social media strategy today?",
  hi: "Hi there! I'm ready to help with your social media management. What would you like to know?",
  help: "I can help with optimizing posting schedules, content strategy, budget allocation, and audience targeting. What specific aspect of your social media strategy would you like to improve?",
  "best time":
    "Based on your audience analytics, the best times to post are weekdays between 6-8 PM. Your engagement rates are 23% higher during these hours.",
  content:
    "Looking at your recent posts, video content is performing 2.3x better than images. I recommend focusing on short-form videos for the next two weeks to boost engagement.",
  budget:
    "I've analyzed your ad spend across platforms. Instagram is giving you the best ROI at $0.13 per engagement. Consider reallocating 20% of your Facebook budget to Instagram for better results.",
  analytics:
    "Your engagement rate is up 12% this week compared to last week. Your most successful post reached 3.4x your average audience.",
  hashtag:
    "Based on trending topics in your industry, I recommend using these hashtags in your next posts: #DigitalMarketing #SocialMediaTips #ContentCreation",
  competitor:
    "Your main competitor has increased their posting frequency by 30% this month. Their video content is getting 2x more engagement than yours.",
  audience:
    "Your audience demographics show that 65% are between 25-34 years old, and 70% access your content via mobile devices. Consider optimizing for mobile viewing.",
  schedule:
    "I've created an optimal posting schedule for next week based on your audience activity patterns. Would you like me to implement it?",
  design:
    "Based on your brand guidelines, I can suggest some design templates that would work well for your upcoming campaign.",
  caption:
    "For your product launch post, I recommend a caption that highlights the key benefits and includes a clear call-to-action.",
  trend:
    "There's a rising trend in your industry around sustainability. Creating content on this topic could increase your reach by up to 40%.",
  performance:
    "Your Instagram account is outperforming your other platforms with 2.5x higher engagement rate. Consider focusing more resources there.",
}

export function AiChat() {
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI assistant. How can I help with your social media strategy today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const generateAiResponse = (userInput: string): string => {
    // Check for keyword matches
    const lowercaseInput = userInput.toLowerCase()

    for (const [keyword, response] of Object.entries(aiResponses)) {
      if (lowercaseInput.includes(keyword)) {
        return response
      }
    }

    // Default response if no keywords match
    return "I can help with optimizing posting schedules, content strategy, budget allocation, and audience targeting. What specific aspect of your social media strategy would you like to improve?"
  }

  const simulateTyping = (response: string, callback: (text: string) => void) => {
    setIsTyping(true)
    let i = 0
    const typingSpeed = 30 // ms per character
    const responseLength = response.length

    const typeChar = () => {
      if (i < responseLength) {
        callback(response.substring(0, i + 1))
        i++
        setTimeout(typeChar, typingSpeed)
      } else {
        setIsTyping(false)
      }
    }

    typeChar()
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Check if user has reached their AI request limit
    if (userSubscription.aiRequestsRemaining <= 0) {
      toast({
        title: "AI Request Limit Reached",
        description: `You've used all ${userSubscription.aiRequestsLimit} AI requests in your ${userSubscription.tier} plan. Upgrade for unlimited AI assistance.`,
        variant: "destructive",
      })
      return
    }

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInput("")

    // Create a temporary AI message for typing indicator
    const tempAiMessage: Message = {
      id: messages.length + 2,
      content: "",
      sender: "ai",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, tempAiMessage])

    // Generate AI response
    const response = generateAiResponse(input)

    // Simulate typing effect
    simulateTyping(response, (partialText) => {
      setMessages((prev) => {
        const newMessages = [...prev]
        newMessages[newMessages.length - 1] = {
          ...newMessages[newMessages.length - 1],
          content: partialText,
        }
        return newMessages
      })
    })

    // Decrement remaining AI requests
    userSubscription.aiRequestsRemaining -= 1
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>AI Assistant</CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              {userSubscription.aiRequestsRemaining}/{userSubscription.aiRequestsLimit} Requests
            </Badge>
            {userSubscription.tier === "free" && (
              <Button variant="outline" size="sm" className="text-xs">
                <Sparkles className="h-3 w-3 mr-1" /> Upgrade
              </Button>
            )}
          </div>
        </div>
        <div className="mt-2">
          <Progress
            value={(userSubscription.aiRequestsRemaining / userSubscription.aiRequestsLimit) * 100}
            className="h-1"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className="flex items-start max-w-[80%]">
                {message.sender === "ai" && (
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs opacity-50 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 ml-2">
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback>
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex space-x-2">
          <Input
            placeholder="Ask about posting times, content strategy, budget allocation..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isTyping) {
                handleSendMessage()
              }
            }}
            disabled={isTyping || userSubscription.aiRequestsRemaining <= 0}
          />
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={isTyping || userSubscription.aiRequestsRemaining <= 0}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {userSubscription.aiRequestsRemaining <= 0 && (
          <div className="mt-4 bg-muted/50 p-3 rounded-md flex items-start">
            <Lock className="h-4 w-4 text-destructive mt-1 mr-2" />
            <div>
              <p className="text-sm font-medium">AI Request Limit Reached</p>
              <p className="text-xs text-muted-foreground">
                Upgrade to Pro for 25 AI requests/month or Business for unlimited AI assistance.
              </p>
              <Button size="sm" className="mt-2" variant="outline">
                <Sparkles className="h-3 w-3 mr-1" /> Upgrade Now
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
