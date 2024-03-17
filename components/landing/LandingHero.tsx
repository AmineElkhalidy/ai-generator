"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "../ui/button";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="text-white font-bold py-30 text-center py-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>

        <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#005DBB]">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Image Generation.",
                "Video Generation.",
                "Music Generation.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400 my-5">
        Create content using AI 10x faster.
      </div>

      <div className="mb-4">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>

      <p className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </p>
    </section>
  );
};

export default LandingHero;
