import Link from "next/link";
import React from "react";
import { SiIndigo as IndonesiaIcon } from "react-icons/si";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import Tooltip from "../elements/Tooltip";
import clsx from "clsx";
import Image from "next/image";

interface ProfileHeaderProps {
  expandMenu: boolean;
}

export default function Profile({ expandMenu }: ProfileHeaderProps) {
  return (
    <div className={clsx("flex flex-row gap-2", expandMenu && "flex-col")}>
      <Image
        src={"/images/logo/flag.png"}
        width={expandMenu ? 60: 40}
        height={expandMenu ? 60: 40}
        alt="logo Indonesia"
        className="transition-all duration-300"
      />
      <div className="flex items-center gap-2">
        <Link href="/">
          <h2>Indonesia</h2>
        </Link>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
    </div>
  );
}