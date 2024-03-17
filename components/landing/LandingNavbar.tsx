"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between mb-10">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-3">
          <Image src="/genify.webp" alt="Genify Logo" fill />
        </div>
        <h1 className="text-white font-semibold text-2xl">Genify</h1>
      </Link>

      <div>
        {isSignedIn ? (
          <Link href="/dashboard">
            <Button variant="premium" className="rounded-full px-6 text-white">
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/sign-up">
            <Button variant="outline" className="rounded-full px-6">
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default LandingNavbar;
