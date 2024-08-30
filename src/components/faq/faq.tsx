import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently <br /> Asked Questions
            </h2>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What features does your SaaS offer?</AccordionTrigger>
                <AccordionContent>
                  Our SaaS platform offers a range of features including project management, 
                  team collaboration tools, real-time analytics, and customizable dashboards. 
                  We continuously update our features based on user feedback and industry trends.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How secure is your platform?</AccordionTrigger>
                <AccordionContent>
                  We take security seriously. Our platform uses industry-standard encryption, 
                  regular security audits, and complies with GDPR and other data protection 
                  regulations. We also offer two-factor authentication and role-based access control.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 14-day free trial for all new users. This gives you full access 
                  to our platform's features so you can evaluate if it meets your needs. No credit 
                  card is required to start the trial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What kind of customer support do you provide?</AccordionTrigger>
                <AccordionContent>
                  We offer 24/7 customer support via email and live chat. Our premium plans also 
                  include dedicated phone support. Additionally, we have an extensive knowledge base 
                  and regular webinars to help you get the most out of our platform.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I integrate your SaaS with other tools?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! We offer a wide range of integrations with popular tools and services. 
                  We also provide an API for custom integrations. If you need help with integrations, 
                  our support team is always ready to assist you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}