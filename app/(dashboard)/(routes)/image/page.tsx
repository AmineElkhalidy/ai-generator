import React from "react";
import Heading from "@/components/Heading";
import { Image } from "lucide-react";

const ImageGenerationPage = () => {
  return (
    <section className="mt-8">
      <Heading
        title="Image Generation"
        description="Our most advanced image generation model."
        Icon={Image}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
    </section>
  );
};

export default ImageGenerationPage;
