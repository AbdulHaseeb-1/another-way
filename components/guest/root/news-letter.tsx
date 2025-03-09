import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Star } from "lucide-react";
import React from "react";

export default function NewsLetter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t border-b">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Stay Updated with Our Newsletter
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest articles, resources, and insights delivered
                directly to your inbox.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by over 5,000 readers
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:justify-end">
            <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
