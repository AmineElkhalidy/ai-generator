import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <Link href="/sign-in">
        <Button size="lg">Login</Button>
      </Link>

      <Link href="/sign-up">
        <Button size="lg">Register</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
