"use client";

import { useTheme } from "next-themes";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl bg-red-500 p-2 text-neutral-50 transition-all duration-300  hover:scale-105 hover:bg-red-600"
    >
      {resolvedTheme === "light" ? <BsCloudSun /> : <BsCloudMoon />}
    </button>
  );
};

export default ThemeToggle;
