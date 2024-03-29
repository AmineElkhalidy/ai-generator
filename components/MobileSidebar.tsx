"use client";

import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = ({ apiLimit }: { apiLimit: number }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0 text-white">
        <Sidebar apilimit={apiLimit} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
