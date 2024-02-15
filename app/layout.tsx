import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genify - AI Saas Generator App",
  description:
    "Genify is an AI Saas generator app which includes five type of content generation: Conversation, Image, Video, Music and Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={rubik.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
