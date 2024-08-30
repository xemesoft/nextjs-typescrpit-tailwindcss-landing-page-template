"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2YjIxYTgiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItNWgtMnYzaDJ6bTAtMTF2Mi01aC0ydjNoMnptLTExIDBoMnYtM2gtMnYzem0wIDExaDJ2LTNoLTJ2M3pNMTQgMTRoMnYtMmgtMnYyem0wIDExaDJ2LTJoLTJ2MnptMTEgMGgydi0yaC0ydjJ6bTAgMTFoMnYtMmgtMnYyem0tMTEgMGgydi0yaC0ydjJ6bTAtMTFoMnYtMmgtMnYyem0yMiAwaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6bS0xMS0xMWgydi0yaC0ydjJ6bTExLTExaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.7))] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItNWgtMnYzaDJ6bTAtMTF2Mi01aC0ydjNoMnptLTExIDBoMnYtM2gtMnYzem0wIDExaDJ2LTNoLTJ2M3pNMTQgMTRoMnYtMmgtMnYyem0wIDExaDJ2LTJoLTJ2MnptMTEgMGgydi0yaC0ydjJ6bTAgMTFoMnYtMmgtMnYyem0tMTEgMGgydi0yaC0ydjJ6bTAtMTFoMnYtMmgtMnYyem0yMiAwaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6bS0xMS0xMWgydi0yaC0ydjJ6bTExLTExaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="container px-8 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-8 px-4 pb-10 md:pb-0">
            <div className="relative inline-block">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500">
                Get in touch
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
            </div>
            <p className="max-w-[600px] text-purple-800 dark:text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're here to help and answer any question you might have. We look
              forward to hearing from you and creating something amazing
              together.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="bg-white dark:bg-purple-900 rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <span className="text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                  contact@example.com
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-white dark:bg-purple-900 rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Phone className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <span className="text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                  +1 (555) 000-0000
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-white dark:bg-purple-900 rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <span className="text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                  123 SaaS Street, Tech City, 12345
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl transform -rotate-6 scale-105 opacity-10 blur-2xl animate-pulse" />
            <div className="relative bg-white dark:bg-purple-900 rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-100">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium text-purple-700 dark:text-purple-300"
                    >
                      First name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      className="rounded-lg border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium text-purple-700 dark:text-purple-300"
                    >
                      Last name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className="rounded-lg border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-purple-700 dark:text-purple-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="john.doe@example.com"
                    type="email"
                    className="rounded-lg border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-purple-700 dark:text-purple-300"
                  >
                    Message
                  </label>
                  <Textarea
                    className="min-h-[120px] rounded-lg border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                    id="message"
                    placeholder="Your message here..."
                  />
                </div>
                <Button
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white transition-all duration-300 transform hover:scale-105"
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="mr-2">Send message</span>
                  <Send
                    className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                  />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
