"use client";

import { useMenu } from "@/common/stores/menu";
import { MenuItemProps } from "@/common/types/menu";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRightShort as ExternalLinkIcon } from "react-icons/bs";

export default function MenuItem({
  title,
  href,
  className,
  onClick,
  icon,
}: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isActive, setIsActive, hideMenu } = useMenu();

  const activeClasses = `flex gap-2 items-center py-2 px-4 text-neutral-600 hover:text-neutral-900 ${isActive === title && "bg-red-600 !text-neutral-50 rounded-lg lg:rounded-full"}`;

  const handleClick = () => {
    hideMenu();
    setIsActive(title);
    if (onClick) onClick();
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
    return (
      <div {...elementProps}>
        <div className="ml-0.5 flex-grow">{title}</div>
        {isActive === title && (
          <ExternalLinkIcon size={22} className="animate-pulse text-neutral-50 lg:hidden block" />
        )}
      </div>
    );
  };

  return (
    <div>
      <Link href={href}>
        <ItemComponent />
      </Link>
    </div>
  );
}
