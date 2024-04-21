import { ABOUT } from "@/common/constants/about";
import React from "react";

export default function Introduction() {
  return (
    <section className="space-y-4">
      {ABOUT.map((paragraph, index) => (
        <div key={index}>{paragraph}</div>
      ))}
    </section>
  );
}
