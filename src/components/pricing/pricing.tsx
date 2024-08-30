"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Start",
      description: "Perfect for individuals and small teams",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "Up to 5 users",
        "10GB storage",
        "Basic reporting",
        "API access",
        "Email support",
      ],
    },
    {
      name: "Business",
      description: "Ideal for growing businesses",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Up to 20 users",
        "50GB storage",
        "Advanced reporting",
        "API access",
        "Priority support",
        "Team collaboration tools",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Custom reporting",
        "Dedicated API support",
        "24/7 phone support",
        "Advanced security features",
        "Custom integrations",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-8 md:py-12 lg:py-24 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Choose Your Plan
          </h2>
          <p className="max-w-[900px] text-sm sm:text-base text-zinc-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-zinc-400">
            Select the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>
        <div className="flex items-center justify-center mt-6 mb-8 space-x-2">
          <span className="text-sm font-medium">Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle yearly pricing"
          />
          <span className="text-sm font-medium">Yearly</span>
          <span className="ml-2 text-xs sm:text-sm text-green-500 font-medium">
            Save 20%
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 flex-1 p-4 md:p-6">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-xs md:text-sm font-normal text-zinc-500 dark:text-zinc-400">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 md:p-6">
                <Button className="w-full rounded-full text-sm md:text-base bg-purple-600">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
