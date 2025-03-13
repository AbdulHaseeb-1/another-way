"use client";
import React, { useRef } from "react";
import { Card, CardContent, CardDescription } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";

export default function Testimonials() {
  const scrollableRef = useRef(null);

  const scrollLeft = () => {
    const scrollable: any = scrollableRef.current;
    if (scrollable && scrollable.children.length > 0) {
      const cardWidth = scrollable.children[0].offsetWidth;
      scrollable.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const scrollable: any = scrollableRef.current;
    if (scrollable && scrollable.children.length > 0) {
      const cardWidth = scrollable.children[0].offsetWidth;
      scrollable.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <Badge variant="outline" className="w-fit mx-auto">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What Our Readers Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our community of readers and subscribers
            </p>
          </div>
        </div>

        {/* Scrollable Carousel */}
        <div className="relative">
          <Button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20"
            variant="outline"
            size="icon"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20"
            variant="outline"
            size="icon"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          {/* Left shadow indicator */}
          <div className="absolute -left-5 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Scrollable container */}
          <div
            ref={scrollableRef}
            className="flex overflow-x-auto pb-4 pt-2 [::webkit-no-scrollbar]"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-none w-[80vw] md:w-[400px] pr-4 ">
                <Card className="h-full text-center  ">
                  <CardContent className="pt-2">
                    <div className="mb-4 flex justify-center">
                      <Avatar className="h-16 w-16 border-2 border-secondary-foreground ">
                        <AvatarImage
                          src={`/images/p.png`}
                          alt={`User ${i}`}
                        />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex justify-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <CardDescription className="mb-4">
                      {
                        [
                          "BlogFolio has become my go-to source for insightful articles. The content is always well-researched and thought-provoking.",
                          "I've been a subscriber for over a year now, and the quality of content has been consistently excellent. Highly recommended!",
                          "The variety of topics covered is impressive. I always find something interesting to read, regardless of my mood or interests.",
                          "The newsletter is one of the few I actually look forward to receiving. Every article provides value and new perspectives.",
                          "As a writer myself, I appreciate the quality and depth of the content. It's clear that a lot of thought goes into each piece.",
                        ][i - 1]
                      }
                    </CardDescription>
                    <p className="font-medium">
                      {
                        [
                          "Sarah Johnson",
                          "Michael Chen",
                          "Emma Williams",
                          "David Rodriguez",
                          "Aisha Patel",
                        ][i - 1]
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {
                        [
                          "Marketing Director",
                          "Software Engineer",
                          "Content Creator",
                          "Entrepreneur",
                          "UX Designer",
                        ][i - 1]
                      }
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {/* Right shadow indicator */}
          <div className="absolute -right-5 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        <div className="flex justify-center mt-8">
          <p className="text-sm text-muted-foreground">
            Swipe to see more testimonials
          </p>
        </div>
      </div>
    </section>
  );
}
