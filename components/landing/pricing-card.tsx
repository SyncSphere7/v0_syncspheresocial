import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  description: string
  price: string
  period: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  badge: string | null
  popular: boolean
  yearlyPrice?: string
}

export function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  buttonVariant,
  badge,
  popular,
  yearlyPrice,
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${popular ? "border-primary shadow-lg relative" : ""}`}>
      {badge && (
        <Badge className="absolute -top-2 right-4" variant="default">
          {badge}
        </Badge>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">/{period}</span>
          {yearlyPrice && <p className="text-sm text-muted-foreground mt-1">{yearlyPrice}</p>}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-primary mr-2 mt-1" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={buttonVariant} className="w-full" asChild>
          <Link href="/signup">{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
