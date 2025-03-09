import { ShipWheel } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen gap-2 grid place-content-center">
      <ShipWheel className="animate-spin" /> Loading
    </div>
  );
}
