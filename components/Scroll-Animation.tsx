"use client";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);
}

export default function ScrollLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, {
    dependencies: [pathname],
    revertOnUpdate: true,
  });

  return (
    <html lang="en">
      <body>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
