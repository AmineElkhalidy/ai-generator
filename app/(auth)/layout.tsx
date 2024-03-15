import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genify - Create an account",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      {children}
    </div>
  );
};

export default AuthLayout;
