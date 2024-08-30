"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, HomeIcon, ArrowRightIcon } from "lucide-react";
import CtaButton from "@/components/button/cta-button";
import Logo from "@/components/logo/logo";

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      if (elem && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="home"
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between ">
        {/*logo*/}
        <div className="flex items-center">
          <Link className="flex items-center space-x-2" href="/">
            <Logo />
          </Link>
        </div>
        {/*nav items*/}
        <nav className="hidden space-x-8 text-lg font-medium md:flex mt-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="transition-colors hover:text-foreground/100 text-foreground/60 relative"
              >
                {item.name}
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-foreground scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </div>
          ))}
        </nav>
        {/*cta button*/}
        <div className="flex items-center space-x-4">
          <CtaButton text={"Get Started"} className="hidden md:inline-flex" />
          {/* on mobile */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-2 py-1 text-lg"
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
                <CtaButton
                  text={"Get Started"}
                  className="mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
