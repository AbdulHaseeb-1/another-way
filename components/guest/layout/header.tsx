"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "./menu";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="font-bold uppercase tracking-tighter">Another Way</div>
        <div>
          <NavigationMenu />
        </div>
      </div>
    </div>
  );
}
