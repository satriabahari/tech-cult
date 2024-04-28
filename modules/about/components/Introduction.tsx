import { ABOUT } from "@/common/constants/about";
import React from "react";

export default function Introduction() {
  return (
    <section className="space-y-4 text-center text-neutral-900 leading-[1.8] lg:px-32 px-0">
      {ABOUT.map((paragraph, index) => (
        <div key={index}>{paragraph}</div>
      ))}
    </section>
  );
}
