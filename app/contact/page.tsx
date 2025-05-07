import Link from "next/link"
import type { Metadata } from "next"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LandingNav } from "@/components/landing-nav"
import { LandingFooter } from "@/components/landing-footer"

export const metadata: Metadata = {
  title: "Contact Us | SyncSphere Social",
  description: "Get in touch with the SyncSphere Social team",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNav />

      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have questions or need assistance? We're here to help. Reach out to our team.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Input placeholder="First Name" />
                      </div>
                      <div className="space-y-2">
                        <Input placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Subject" />
                    </div>
                    <div className="space-y-2">
                      <Textarea placeholder="Your Message" className="min-h-[150px]" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us directly using the following contact details.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+267 787 308 564</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">ceo@syncsphereofficial.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Office</h3>
                        <p className="text-muted-foreground">
                          SyncSphere Headquarters
                          <br />
                          Gaborone, Botswana
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mx-auto max-w-md text-center">
              <h2 className="text-2xl font-bold">Need immediate assistance?</h2>
              <p className="mt-2 text-muted-foreground">
                Our support team is available during business hours to assist you with any questions or issues.
              </p>
              <Button className="mt-4" variant="outline" asChild>
                <Link href="/faq">Visit our FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}
