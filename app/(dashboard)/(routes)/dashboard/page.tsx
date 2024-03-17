"use client";

import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <section className="pb-8">
      <div className="mt-8 mb-12 space-y-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
          Explore the power of AI
        </h2>
        <p className="text-center text-muted-foreground">
          Chat with <span className="font-medium">Genify</span>, The Smartest
          AI.
        </p>
      </div>

      <div className="px-4 md:px-20 grid lg:grid-cols-2 gap-4 lg:gap-6">
        {tools.map((tool, index) => (
          <Card
            className={cn(
              "p-4 bg-black/5 flex items-center justify-between duration-300 hover:border cursor-pointer group ",
              tool.bgColor
            )}
            key={index}
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>

              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="w-5 h-5 duration-300 group-hover:translate-x-2" />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DashboardPage;
