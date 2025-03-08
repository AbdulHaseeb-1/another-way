
import * as React from "react";
import {  X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Menu({ open, setOpen }: { open: boolean; setOpen: any }) {
  return (
    <div className="md:hidden">
      <Dialog open={open} onOpenChange={setOpen} >
        <DialogContent className=" w-full max-w-md rounded-md border-0  ">
          <DialogHeader className="flex  p-4 ">
            <DialogTitle className="text-2xl font-semibold">Menu</DialogTitle>
          </DialogHeader>

          <nav className="flex flex-col px-5 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 transition-colors duration-200 py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
    </div>
  );
}
