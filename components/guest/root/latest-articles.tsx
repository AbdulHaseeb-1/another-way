import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LatestArticles() {
  return (
    <section className="w-full ">
      <div className="container ">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Latest Articles
            </h2>
            <p className="text-muted-foreground">
              Stay updated with our most recent publications.
            </p>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 border-y py-2">
                  <Image
                    src={`/images/p.png`}
                    width={250}
                    height={150}
                    alt={`Latest article ${i}`}
                    className="aspect-video  rounded-lg object-cover w-full"
                  />
                  <div className="flex flex-col justify-center space-y-2">
                    <Badge className="w-fit">Design</Badge>
                    <h3 className="font-bold">
                      Creating Responsive Layouts with Modern CSS
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Learn how to build flexible and responsive layouts using
                      the latest CSS features and techniques.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>March 8, 2025</span>
                      <span className="mx-2">•</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10  md:mt-0 space-y-4 ">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Popular This Week
            </h2>
            <p className="text-muted-foreground">
              Discover what others are reading right now.
            </p>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="font-bold">{i}</span>
                  </div>
                  <div className="space-y-1">
                   <Link href={"/article/slug"}>
                    <h3 className="font-medium line-clamp-2">
                      10 Essential Tools Every Developer Should Know About
                    </h3>
                   </Link>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>March 5, 2025</span>
                      <span className="mx-2">•</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 grid place-content-center">
              <Link href="#" className="">
                <Button variant="outline" className="w-72">
                  View All Popular Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
