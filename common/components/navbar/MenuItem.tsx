"use client";

import { useMenu } from "@/common/stores/menu";
import { MenuItemProps } from "@/common/types/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function MenuItem({
  title,
  href,
  className,
  onClick,
  icon,
}: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { hideMenu } = useMenu();
  const pathname = usePathname();

  console.log(pathname)

  const activeClasses = `flex gap-2 items-center py-2 px-4 text-neutral-700 ${pathname === href ? "bg-neutral-700 " : ""}`;
  const handleClick = () => {
    hideMenu();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const elementProps = {
    className: `${activeClasses} ${className}`,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
  const ItemComponent = () => {
    return <div {...elementProps}>{title}</div>;
  };
  return (
    <div>
      <Link href={href}>{title}</Link>
    </div>
  );
}
