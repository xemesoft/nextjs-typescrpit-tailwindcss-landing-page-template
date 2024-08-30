"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
} from "./company-logos/company-logos";
import { cn } from "@/lib/utils";

export default function LogoClouds() {
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm lg:text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-16 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            <Logo1 className={cn("w-full h-8")} />
            <Logo2 className={cn("w-full h-8")} />
            <Logo3 className={cn("w-full h-8")} />
            <Logo4 className={cn("w-full h-8")} />
            <Logo5 className={cn("w-full h-8")} />
            <Logo6 className={cn("w-full h-8")} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
