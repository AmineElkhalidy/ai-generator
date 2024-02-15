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
import React from "react";
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
    href: "/image-generation",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video-generation",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music-generation",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code-generation",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-12">
          <div className="relative w-8 h-8 mr-4">
            <Image fill src="/genify.png" alt="Genify Logo" />
          </div>
          <h1 className="text-2xl font-bold">Genify</h1>
        </Link>
      </div>

      <ul className="space-y-1">
        {links.map((link, index) => (
          <li
            key={index}
            className="p-3 text-sm group flex  w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg"
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
    </div>
  );
};

export default Sidebar;
