import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import "../style/textAnimation.css";
import "../style/theme.css";
import "../style/style.css";
import Page from "./page";

export const metadata: Metadata = {
  title: "Kufbreezy | For the community",
  description: "Generate Leads with my simple to use AI tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "flex flex-col min-h-screen"
        )}
      >
            {/* <Header/> */}
          <Nav />
          {/* {children} */}
          <Page/>
        
      </body>
    </html>
  );
}
