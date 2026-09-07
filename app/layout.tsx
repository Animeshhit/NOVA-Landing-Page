import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollAnimation from "@/components/Scroll-Animation";

export const metadata: Metadata = {
  title: "NOVA — Build better. Work smarter.",
  description: "The intelligent workspace for teams doing meaningful work.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fffaf0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#fffaf0]" suppressHydrationWarning>
      <body className="antialiased">
        <ScrollAnimation>{children}</ScrollAnimation>
      </body>
    </html>
  );
}
