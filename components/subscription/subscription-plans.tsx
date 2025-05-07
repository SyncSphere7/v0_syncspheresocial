"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Smartphone, Calendar, Zap } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Switch } from "@/components/ui/switch"

type PlanFeature = {
  name: string
  included: boolean
  limit?: string
  highlight?: boolean
}

type Plan = {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: PlanFeature[]
  isFeatured?: boolean
  badge?: string
  trialDays?: number
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Free Trial",
    description: "Perfect for trying out SyncSphere Social",
    monthlyPrice: 0,
    yearlyPrice: 0,
    trialDays: 7,
    features: [
      { name: "Multi-platform posting", included: true, limit: "3 posts/week", highlight: true },
      { name: "Basic scheduling", included: true, limit: "7 days ahead" },
      { name: "Connect up to 2 social platforms", included: true },
      { name: "Basic analytics", included: true },
      { name: "Single user account", included: true },
      { name: "Basic design tools", included: true, limit: "5 designs" },
      { name: "AI post suggestions", included: true, limit: "3/week", highlight: true },
      { name: "Livestreaming", included: false, highlight: true },
      { name: "Ad campaign management", included: false },
      { name: "Custom branding", included: false },
    ],
  },
  {
    id: "pro",
    name: "Professional",
    description: "Ideal for growing businesses and creators",
    monthlyPrice: 29,
    yearlyPrice: 290, // ~20% discount for annual
    isFeatured: true,
    badge: "Most Popular",
    features: [
      { name: "Multi-platform posting", included: true, limit: "Unlimited", highlight: true },
      { name: "Advanced scheduling", included: true, limit: "Up to 3 months ahead" },
      { name: "Connect up to 5 social platforms", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Up to 3 user accounts", included: true },
      { name: "Full design toolkit", included: true, limit: "50 designs/month" },
      { name: "AI post suggestions", included: true, limit: "25/month", highlight: true },
      { name: "Multi-platform livestreaming", included: true, limit: "720p quality", highlight: true },
      { name: "Basic ad campaign management", included: true, limit: "3 active campaigns" },
      { name: "Custom branding", included: false },
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "For teams and businesses with advanced needs",
    monthlyPrice: 79,
    yearlyPrice: 790, // ~17% discount for annual
    features: [
      { name: "Multi-platform posting", included: true, limit: "Unlimited", highlight: true },
      { name: "Advanced scheduling", included: true, limit: "Up to 1 year ahead" },
      { name: "Connect unlimited social platforms", included: true },
      { name: "Advanced analytics with exports", included: true },
      { name: "Up to 10 user accounts", included: true },
      { name: "Premium design toolkit", included: true, limit: "Unlimited designs" },
      { name: "Unlimited AI post suggestions", included: true, highlight: true },
      { name: "Multi-platform livestreaming", included: true, limit: "1080p quality", highlight: true },
      { name: "Advanced ad campaign management", included: true, limit: "Unlimited campaigns" },
      { name: "Custom branding", included: true },
    ],
  },
]

export function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [paymentMethod, setPaymentMethod] = useState("visa")
  const [isProcessing, setIsProcessing] = useState(false)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const handleSubscribe = () => {
    if (!selectedPlan) return

    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)

      toast({
        title: "Subscription successful!",
        description:
          selectedPlan.monthlyPrice === 0
            ? `Your ${selectedPlan.trialDays}-day free trial has started. No payment required.`
            : `You've subscribed to the ${selectedPlan.name} plan.`,
      })

      setSelectedPlan(null)
    }, 2000)
  }

  const handleStartFreeTrial = () => {
    toast({
      title: "Free trial activated!",
      description: `Your 7-day free trial has started. No payment information required.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <p className="text-muted-foreground">Select the perfect plan for your social media management needs</p>
      </div>

      <div className="flex justify-center items-center space-x-2 mb-8">
        <span className={billingCycle === "monthly" ? "font-medium" : "text-muted-foreground"}>Monthly</span>
        <Switch
          checked={billingCycle === "yearly"}
          onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
        />
        <span className={billingCycle === "yearly" ? "font-medium" : "text-muted-foreground"}>
          Yearly{" "}
          <Badge variant="outline" className="ml-1 font-normal">
            Save up to 20%
          </Badge>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col ${plan.isFeatured ? "border-primary shadow-lg" : ""}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="mt-1.5">{plan.description}</CardDescription>
                </div>
                {plan.badge && (
                  <Badge variant="default" className="ml-2">
                    {plan.badge}
                  </Badge>
                )}
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold">
                  ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-muted-foreground ml-1">/{billingCycle === "monthly" ? "month" : "year"}</span>
                {billingCycle === "yearly" && plan.monthlyPrice > 0 && (
                  <Badge variant="outline" className="ml-2">
                    Save ${Math.round(plan.monthlyPrice * 12 - plan.yearlyPrice)}
                  </Badge>
                )}
                {plan.trialDays && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.trialDays}-day free trial, no credit card required
                  </p>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`mr-2 mt-0.5 ${feature.included ? "text-primary" : "text-muted-foreground"}`}>
                      {feature.included ? <Check className="h-4 w-4" /> : "×"}
                    </span>
                    <span
                      className={`${feature.included ? "" : "text-muted-foreground"} ${
                        feature.highlight ? "font-medium" : ""
                      }`}
                    >
                      {feature.name}{" "}
                      {feature.limit && (
                        <span className={feature.highlight ? "text-primary" : "text-muted-foreground"}>
                          ({feature.limit})
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {plan.id === "free" ? (
                <Button variant="outline" className="w-full" onClick={handleStartFreeTrial}>
                  Start Free Trial
                </Button>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={plan.isFeatured ? "default" : "outline"}
                      className="w-full"
                      onClick={() => setSelectedPlan(plan)}
                    >
                      Subscribe
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Subscribe to {selectedPlan?.name}</DialogTitle>
                      <DialogDescription>
                        {billingCycle === "monthly"
                          ? `$${selectedPlan?.monthlyPrice}/month`
                          : `$${selectedPlan?.yearlyPrice}/year (Save $${Math.round(
                              selectedPlan?.monthlyPrice! * 12 - selectedPlan?.yearlyPrice!,
                            )})`}
                      </DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="visa" onValueChange={setPaymentMethod}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="visa" className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          Visa
                        </TabsTrigger>
                        <TabsTrigger value="mtn" className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4" />
                          MTN MoMo
                        </TabsTrigger>
                        <TabsTrigger value="airtel" className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4" />
                          Airtel Money
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="visa" className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name">Name on Card</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                      </TabsContent>

                      <TabsContent value="mtn" className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="mtn-number">MTN Mobile Money Number</Label>
                          <Input id="mtn-number" placeholder="07X XXX XXXX" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          You will receive a prompt on your phone to confirm the payment.
                        </p>
                      </TabsContent>

                      <TabsContent value="airtel" className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="airtel-number">Airtel Money Number</Label>
                          <Input id="airtel-number" placeholder="07X XXX XXXX" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          You will receive a prompt on your phone to confirm the payment.
                        </p>
                      </TabsContent>
                    </Tabs>

                    <div className="flex justify-between mt-4">
                      <Button variant="outline" onClick={() => setSelectedPlan(null)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSubscribe} disabled={isProcessing}>
                        {isProcessing ? "Processing..." : "Subscribe"}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-muted/30 rounded-lg p-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <Zap className="h-5 w-5 mr-2 text-primary" />
          Why Choose SyncSphere Social?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 mr-2 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Multi-Platform Management</h4>
              <p className="text-sm text-muted-foreground">
                Schedule, post, and analyze content across all major social platforms from one dashboard.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <svg
              className="h-5 w-5 mr-2 text-primary mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 9v-2" />
              <path d="M12 17v-2" />
              <path d="M9 12H7" />
              <path d="M17 12h-2" />
            </svg>
            <div>
              <h4 className="font-medium">Live Streaming</h4>
              <p className="text-sm text-muted-foreground">
                Stream to multiple platforms simultaneously with our advanced livestreaming tools.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <svg
              className="h-5 w-5 mr-2 text-primary mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" />
              <path d="M16.8 9.6A6 6 0 0 1 8 16.8" />
              <path d="M8.8 7.2a6 6 0 0 1 8.8 7.2" />
            </svg>
            <div>
              <h4 className="font-medium">AI-Powered Assistance</h4>
              <p className="text-sm text-muted-foreground">
                Get content suggestions, optimal posting times, and audience insights powered by AI.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <svg
              className="h-5 w-5 mr-2 text-primary mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12" />
              <path d="m8 11 4 4 4-4" />
              <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
            </svg>
            <div>
              <h4 className="font-medium">Built-in Design Studio</h4>
              <p className="text-sm text-muted-foreground">
                Create stunning social media graphics without leaving the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
