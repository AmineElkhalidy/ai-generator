"use client";

import Heading from "@/components/Heading";
import { Settings } from "lucide-react";
import React from "react";

const SettingsPage = () => {
  return (
    <section className="mt-8">
      <Heading
        title="Settings"
        description="Tweak your settings."
        Icon={Settings}
        iconColor="text-black"
        bgColor="bg-black/10"
      />
    </section>
  );
};

export default SettingsPage;
