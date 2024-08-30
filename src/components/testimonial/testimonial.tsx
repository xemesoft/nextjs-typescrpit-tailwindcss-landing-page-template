"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data generator for testimonials
const generateTestimonial = (id: number) => ({
  id,
  name: `Client ${id}`,
  position: `Software Engineer at Company ${id}`,
  avatar: `/placeholder.svg?height=36&width=36`,
  title: `Testimonial Title ${id}`,
  content: [
    `As someone who mainly designs in the browser, I've been a casual user of this product, but as soon as I saw and started using it, my mind was 🤯.`,
    `Everything is so well structured and simple to use (I've learned so much about design by just using the toolkit).`,
    `Aesthetically, the well-designed components are beautiful and will undoubtedly level up your next application.`,
  ],
});

const TESTIMONIALS_PER_PAGE = 4;
const MAX_TESTIMONIALS = 12;

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(() =>
    Array.from({ length: TESTIMONIALS_PER_PAGE }, (_, i) =>
      generateTestimonial(i + 1),
    ),
  );
  const [isPending, startTransition] = useTransition();

  const loadMoreTestimonials = () => {
    startTransition(() => {
      const newTestimonials = Array.from(
        { length: TESTIMONIALS_PER_PAGE },
        (_, i) => generateTestimonial(testimonials.length + i + 1),
      );
      setTestimonials((prev) => [...prev, ...newTestimonials]);
    });
  };

  const hasMoreTestimonials = testimonials.length < MAX_TESTIMONIALS;

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 ">
        <div className="mx-auto text-center max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classNamees from Tailwind
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.id}
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
              style={{
                opacity:
                  index < testimonials.length - TESTIMONIALS_PER_PAGE ||
                  !isPending
                    ? 1
                    : 0,
                transform:
                  index < testimonials.length - TESTIMONIALS_PER_PAGE ||
                  !isPending
                    ? "translateY(0)"
                    : "translateY(20px)",
              }}
            >
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {testimonial.title}
                </h3>
                {testimonial.content.map((paragraph, i) => (
                  <p key={i} className="my-4">
                    {paragraph}
                  </p>
                ))}
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt={`${testimonial.name}'s profile picture`}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/*<img*/}
                {/*  className="w-9 h-9 rounded-full"*/}
                {/*  src={testimonial.avatar}*/}
                {/*  alt={`${testimonial.name}'s profile picture`}*/}
                {/*/>*/}
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{testimonial.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        {hasMoreTestimonials && (
          <div className="text-center mt-8">
            <Button
              onClick={loadMoreTestimonials}
              disabled={isPending}
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {isPending ? "Loading..." : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
