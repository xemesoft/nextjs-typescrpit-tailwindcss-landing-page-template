import { FlipWords } from "@/components/ui/flip-words";
import LogoClouds from "@/components/logo-clouds/logo-clouds";
import AvatarCircles from "@/components/avatar-circles";
import CtaButton from "@/components/button/cta-button";
import Image from "next/image";

export default function Hero() {
  const words = ["better", "cute", "beautiful", "modern"];

  const avatarUrls = [
    "/avatar1.png",
    "/avatar2.png",
    "/avatar3.png",
    "/avatar4.png",
  ];

  return (
    <section className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pt-32 md:pt-52">
          <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-relaxed text-gray-900 md:text-3xl lg:text-5xl">
            We create for the<FlipWords words={words} />world
          </h1>
          <p className="text-lg md:text-xl text-gray-900">
            Unlock Your Business Potential
          </p>

          <div className="flex flex-row items-center justify-center mt-16">
            <CtaButton text={"Get Started"} />
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
          </div>
          <LogoClouds />
          <div className="flex justify-center">
            <Image
              src="/dashboard.png"
              alt="Dashboard image"
              width={1000}
              height={1000}
              className="rounded-t-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
