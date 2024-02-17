"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FreeCounter from "./FreeCounter";
const links = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = ({ apilimit = 0 }: { apilimit: number }) => {
  const pathname = usePathname();

  return (
    <div className="py-4 flex flex-col h-full bg-[#111827] text-white justify-between overflow-y-auto">
      <div className="px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-10">
          <div className="relative w-8 h-8 mr-3">
            <Image fill src="/genify.webp" alt="Genify Logo" />
          </div>
          <h1 className="text-2xl font-bold">Genify</h1>
        </Link>
      </div>

      <ul className="space-y-1 mb-10">
        {links.map((link, index) => (
          <li
            key={index}
            className={cn(
              "p-3 text-sm group flex  w-full justify-start font-medium cursor-pointer duration-300 hover:bg-white/10 rounded-lg",
              pathname === link.href
                ? "text-white bg-white/10"
                : "text-zinc-400"
            )}
          >
            <Link href={link.href}>
              <div className="flex items-center flex-1">
                <link.icon className={cn("h-5 w-5 mr-3", link.color)} />
                <span>{link.label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <FreeCounter apilimit={apilimit} />
    </div>
  );
};

export default Sidebar;
