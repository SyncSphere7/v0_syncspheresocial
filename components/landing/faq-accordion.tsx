"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What social media platforms does SyncSphere support?</AccordionTrigger>
        <AccordionContent>
          SyncSphere Social supports all major social media platforms including Facebook, Instagram, Twitter/X,
          LinkedIn, TikTok, YouTube, Pinterest, and more. We regularly add support for new platforms.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do I need to provide payment information for the free trial?</AccordionTrigger>
        <AccordionContent>
          No, you don't need to provide any payment information to start your 7-day free trial. You can try all the
          features included in the free trial without any commitment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I switch between plans?</AccordionTrigger>
        <AccordionContent>
          Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available
          immediately. If you downgrade, the changes will take effect at the end of your current billing cycle.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How does the multi-platform livestreaming work?</AccordionTrigger>
        <AccordionContent>
          Our multi-platform livestreaming feature allows you to broadcast to multiple social media platforms
          simultaneously. You can stream to Facebook, YouTube, Instagram, and other platforms all at once, saving you
          time and expanding your reach.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What kind of AI assistance does SyncSphere provide?</AccordionTrigger>
        <AccordionContent>
          SyncSphere's AI assistant helps with content creation, caption writing, hashtag suggestions, optimal posting
          time recommendations, audience insights, and performance analytics. The AI learns from your content and
          audience to provide increasingly personalized recommendations over time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Can I collaborate with my team?</AccordionTrigger>
        <AccordionContent>
          Yes, SyncSphere Social offers team collaboration features. Depending on your plan, you can add multiple team
          members with different permission levels, assign tasks, and manage approval workflows for content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
