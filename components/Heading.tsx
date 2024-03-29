import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

const Heading = ({
  title,
  description,
  Icon,
  iconColor,
  bgColor,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-9">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>

      <div>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
