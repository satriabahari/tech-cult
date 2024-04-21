"use client";

import React, { useEffect, useState } from "react";
import Profile from "../../navbar/Profile";
import ThemeToggleButton from "../../navbar/ThemeToggleButton";
import MobileMenuButton from "../../navbar/MobileMenuButton";
import UseIsMobile from "@/common/hooks/UseIsMobile";
import Menu from "../../navbar/Menu";
import { MENU_ITEMS } from "@/common/constants/menu";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../../navbar/MobileMenu";

export default function Header() {
  const [expandMenu, setExpandMenu] = useState(false);
  const isMobile = UseIsMobile();
  const menus = MENU_ITEMS.filter((item) => item.isShow);

  useEffect(() => {
    if (expandMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandMenu]);

  return (
    <header className="fixed z-20 w-full bg-light dark:bg-dark shadow-md">
      <div className="flex items-center justify-between px-4 py-2">
        <Profile expandMenu={expandMenu} />
        <div className="hidden lg:flex">
          <Menu list={menus} />
        </div>
        <div
          className={clsx(
            "flex gap-6",
            expandMenu && "flex-col-reverse items-end justify-between",
          )}
        >
          <ThemeToggleButton />
          <div className="flex items-center lg:hidden">
            <MobileMenuButton
              expandMenu={expandMenu}
              setExpandMenu={setExpandMenu}
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <AnimatePresence>{expandMenu && <MobileMenu />}</AnimatePresence>
      </div>
    </header>
  );
}
