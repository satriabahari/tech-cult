import { MenuItemProps } from "@/common/types/menu";
import React from "react";
import MenuItem from "./MenuItem";

interface MenuProps {
  list: MenuItemProps[];
}

export default function Menu({ list }: MenuProps) {
  return (
    <nav className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 px-4">
      {list.map((item: MenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </nav>
  );
}
