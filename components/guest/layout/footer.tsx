import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              AW
            </span>
            <span className="font-bold">Another Way</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Another Way. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.google.com"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Terms
          </Link>
          <Link
            href="https://candle-king.vercel.app/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Privacy
          </Link>
          <Link
            href="https://localstore-git-main-abdul-haseebs-projects-c664f8ff.vercel.app/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
