import React from "react";
import Heading from "@/components/Heading";
import { Video } from "lucide-react";

const VideoGenerationPage = () => {
  return (
    <section className="mt-8">
      <Heading
        title="Video Generation"
        description="Our most advanced video generation model."
        Icon={Video}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
    </section>
  );
};

export default VideoGenerationPage;
