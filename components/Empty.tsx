import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col justify-center items-center">
      <div className="relative h-72 w-72">
        <Image src="/empty.png" alt="Empty" fill />
      </div>
      <Label className="text-muted-foreground font-normal text-center">
        {label}
      </Label>
    </div>
  );
};

export default Empty;
