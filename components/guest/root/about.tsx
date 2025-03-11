import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              About the Author
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Learn more about the person behind this blog and their journey.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <Image
              src="/images/placeholder.png"
              width={1000}
              height={1000}
              alt="Author"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Alex Johnson</h3>
              <p className="text-muted-foreground">
                Hi, I'm Alex! I'm a passionate writer and tech enthusiast with
                over 10 years of experience in the industry. I started this blog
                to share my knowledge and insights with others who share my
                interests.
              </p>
              <div className="flex justify-center gap-4 md:justify-start">
                <Link href="#">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="#">
                  <Button variant="ghost" size="icon">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="#">
                  <Button variant="ghost" size="icon">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
                <Link href="#">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
