import { LayoutDashboard } from "lucide-react";
import React from "react";
import { Menu} from "./menu";

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="font-bold uppercase tracking-tighter">Another Way</div>
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
}
