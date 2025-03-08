"use client";
import React from "react";
import { Menu } from "./menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="font-bold uppercase tracking-tighter">Another Way</div>
        <div>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            |||
          </Button>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}
