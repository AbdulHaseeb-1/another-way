import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Home, Info, Phone, Briefcase } from "lucide-react";
import { ModeToggle } from "./ThemeToggle";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className= "fixed top-4 right-4 p-2 rounded-full bg-muted transition-colors shadow-lg"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 " />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dialog */}
      <div
        className={`fixed bg-background inset-y-0 right-0 w-full sm:w-80  shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full flex flex-col ">
          {/* Header */}
          <div className="p-4 border-b dark:border-neutral-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Menu
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-4 space-y-2">
              {navigationItems.map((item,i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Footer with Theme Toggle */}
          <div className="p-4 border-t  flex justify-between">
           Theme <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
