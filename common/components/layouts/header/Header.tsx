"use client";

import React, { useEffect, useState } from "react";
import Profile from "../../navbar/Profile";
import ThemeToggleButton from "../../navbar/ThemeToggleButton";
import MobileMenuButton from "../../navbar/MobileMenuButton";
import Menu from "../../navbar/Menu";
import { MENU_ITEMS } from "@/common/constants/menu";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../../navbar/MobileMenu";
import { useMenu } from "@/common/stores/menu";

export default function Header() {
  const { isOpen, toggleMenu } = useMenu();
  const menus = MENU_ITEMS.filter((item) => item.isShow);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed z-20 w-full bg-light shadow-md dark:bg-dark">
      <div className="flex items-center justify-between px-6 py-4 lg:px-24">
        <Profile expandMenu={isOpen} />
        <div className="hidden lg:flex">
          <Menu list={menus} />
        </div>
        <div
          className={clsx(
            "flex gap-6",
            isOpen && "flex-col-reverse items-end justify-between",
          )}
        >
          <ThemeToggleButton />
          <div className="flex items-center lg:hidden">
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
      </div>
    </header>
  );
}
