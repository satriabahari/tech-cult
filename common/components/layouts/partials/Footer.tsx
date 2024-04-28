import React from "react";

export default function Footer() {
  return (
    <footer className="flex w-full bg-red-500 text-neutral-50 justify-center items-center py-2 gap-x-1 mt-12 text-sm">
      <div>© {new Date().getFullYear()}</div>
      <div>Built with Next.js</div>
    </footer>
  );
}
