"use client";

import Link from "next/link";
import { useState } from "react";
import { BsArrowRightShort as ExternalLinkIcon } from "react-icons/bs";

import { useMenu } from "@/common/stores/menu";
import { MenuItemProps } from "@/common/types/menu";

const MenuItem = ({ title, href, className, onClick, icon }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isActive, setIsActive, hideMenu } = useMenu();

  const activeClasses = `flex gap-2 items-center py-2 px-4 text-neutral-600 hover:text-neutral-900 ${isActive.charAt(0).toUpperCase() + isActive.slice(1) === title && "bg-red-600 !text-neutral-50 dark:!text-neutral-200 rounded-lg lg:rounded-full"}`;

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
        <div className="textneutral-800 ml-0.5 flex-grow dark:text-neutral-50 ">
          {title}
        </div>
        {isActive === title && (
          <ExternalLinkIcon
            size={22}
            className="block animate-pulse text-neutral-50 lg:hidden"
          />
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
};

export default MenuItem;
