import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Calendar, Paintbrush, Bot, Video } from "lucide-react"
import { LandingNav } from "@/components/landing-nav"
import { LandingFooter } from "@/components/landing-footer"
import { FeatureCard } from "@/components/landing/feature-card"
import { TestimonialCard } from "@/components/landing/testimonial-card"
import { PricingCard } from "@/components/landing/pricing-card"
import { FAQAccordion } from "@/components/landing/faq-accordion"

export default function Home() {
  // We're now using this file as our landing page
  // No redirect needed
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNav />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-24 pb-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="mb-2" variant="outline">
                  All-in-one Social Media Management
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Manage All Your Social Media in <span className="text-primary">One Place</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule posts, design graphics, livestream, and get AI-powered insights across all your social
                  platforms with SyncSphere Social.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">See Features</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
                <Check className="h-4 w-4 text-primary ml-4" />
                <span>7-day free trial</span>
                <Check className="h-4 w-4 text-primary ml-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                <img
                  src="/placeholder.svg?height=720&width=1280&text=SyncSphere+Dashboard"
                  alt="SyncSphere Dashboard"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <Bot className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-xl font-medium tracking-tight">Trusted by brands worldwide</h2>
              <p className="text-muted-foreground">
                Join thousands of businesses managing their social media with SyncSphere
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-70">
              {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"].map((brand) => (
                <div key={brand} className="flex items-center justify-center">
                  <img src={`/placeholder.svg?height=40&width=120&text=${brand}`} alt={brand} className="h-8 md:h-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-2">Features</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Succeed
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SyncSphere Social combines all the tools you need to manage your social media presence effectively.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-primary" />}
              title="Multi-Platform Scheduling"
              description="Schedule and automate posts across all major social platforms from one dashboard."
            />
            <FeatureCard
              icon={<Video className="h-10 w-10 text-primary" />}
              title="Multi-Platform Livestreaming"
              description="Stream to multiple platforms simultaneously with our advanced livestreaming tools."
            />
            <FeatureCard
              icon={<Bot className="h-10 w-10 text-primary" />}
              title="AI-Powered Assistance"
              description="Get content suggestions, optimal posting times, and audience insights powered by AI."
            />
            <FeatureCard
              icon={<Paintbrush className="h-10 w-10 text-primary" />}
              title="Built-in Design Studio"
              description="Create stunning social media graphics without leaving the platform."
            />
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="mb-2" variant="outline">
                  Multi-Platform Management
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter">One Dashboard for All Your Social Media</h2>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Connect all your social accounts and manage everything from a single, intuitive dashboard. Schedule
                  posts, respond to comments, and analyze performance across platforms.
                </p>
              </div>
              <ul className="grid gap-2">
                {[
                  "Connect Facebook, Instagram, Twitter, LinkedIn, TikTok, and more",
                  "Schedule posts weeks or months in advance",
                  "Analyze cross-platform performance with unified analytics",
                  "Respond to comments and messages from one inbox",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button asChild>
                  <Link href="#pricing">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
              <img
                src="/placeholder.svg?height=720&width=1280&text=Multi-Platform+Dashboard"
                alt="Multi-Platform Dashboard"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
              <img
                src="/placeholder.svg?height=720&width=1280&text=AI+Assistant"
                alt="AI Assistant"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <Badge className="mb-2" variant="outline">
                  AI-Powered
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter">Your Social Media AI Assistant</h2>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Let our AI help you create better content, understand your audience, and optimize your social media
                  strategy for maximum engagement.
                </p>
              </div>
              <ul className="grid gap-2">
                {[
                  "Generate engaging post ideas and captions",
                  "Get AI-recommended hashtags for better reach",
                  "Analyze audience sentiment and engagement patterns",
                  "Optimize posting schedules based on audience activity",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button asChild>
                  <Link href="#pricing">Try AI Features</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-2">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Loved by Social Media Managers</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our customers have to say about SyncSphere Social.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <TestimonialCard
              quote="SyncSphere has completely transformed how we manage our social media. The multi-platform scheduling and AI suggestions have saved us hours every week."
              author="Sarah Johnson"
              role="Marketing Director, TechCorp"
              avatarUrl="/placeholder.svg?height=80&width=80&text=SJ"
            />
            <TestimonialCard
              quote="The built-in design tools and livestreaming features are game-changers. We no longer need multiple subscriptions for different tools."
              author="Michael Chen"
              role="Social Media Manager, StyleBrand"
              avatarUrl="/placeholder.svg?height=80&width=80&text=MC"
            />
            <TestimonialCard
              quote="The AI assistant feels like having an extra team member. It's helped us increase our engagement by 45% in just two months."
              author="Olivia Martinez"
              role="Content Creator, CreativeStudio"
              avatarUrl="/placeholder.svg?height=80&width=80&text=OM"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-2">Pricing</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Select the perfect plan for your social media management needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <PricingCard
              title="Free Trial"
              description="Perfect for trying out SyncSphere Social"
              price="$0"
              period="7 days"
              features={[
                "Multi-platform posting (3 posts/week)",
                "Basic scheduling (7 days ahead)",
                "Connect up to 2 social platforms",
                "Basic analytics",
                "Basic design tools (5 designs)",
                "AI post suggestions (3/week)",
              ]}
              buttonText="Start Free Trial"
              buttonVariant="outline"
              badge={null}
              popular={false}
            />
            <PricingCard
              title="Professional"
              description="Ideal for growing businesses and creators"
              price="$29"
              period="per month"
              features={[
                "Unlimited multi-platform posting",
                "Advanced scheduling (3 months ahead)",
                "Connect up to 5 social platforms",
                "Advanced analytics",
                "Full design toolkit (50 designs/month)",
                "AI post suggestions (25/month)",
                "Multi-platform livestreaming (720p)",
                "Basic ad campaign management",
              ]}
              buttonText="Subscribe Now"
              buttonVariant="default"
              badge="Most Popular"
              popular={true}
              yearlyPrice="$290/year (Save $58)"
            />
            <PricingCard
              title="Business"
              description="For teams and businesses with advanced needs"
              price="$79"
              period="per month"
              features={[
                "Unlimited multi-platform posting",
                "Advanced scheduling (1 year ahead)",
                "Connect unlimited social platforms",
                "Advanced analytics with exports",
                "Premium design toolkit (Unlimited)",
                "Unlimited AI post suggestions",
                "Multi-platform livestreaming (1080p)",
                "Advanced ad campaign management",
                "Custom branding",
              ]}
              buttonText="Subscribe Now"
              buttonVariant="outline"
              badge={null}
              popular={false}
              yearlyPrice="$790/year (Save $158)"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-2">FAQ</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about SyncSphere Social.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-2">Get Started Today</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Social Media?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your free 7-day trial now. No credit card required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  )
}
