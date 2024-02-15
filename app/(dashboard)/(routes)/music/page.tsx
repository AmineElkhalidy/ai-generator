import React from "react";
import Heading from "@/components/Heading";
import { Music } from "lucide-react";

const MusicGenerationPage = () => {
  return (
    <section className="mt-8">
      <Heading
        title="Music Generation"
        description="Our most advanced music generation model."
        Icon={Music}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
    </section>
  );
};

export default MusicGenerationPage;
