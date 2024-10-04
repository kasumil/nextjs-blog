"use client";

import { LinkType } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const LinkTag: React.FC<LinkType> = ({
  children,
  href,
  Tag = "p",
  logo = false,
  textColor = "text-gray-500",
  props,
}) => {
  const pathname = usePathname();

  const classNames = `hover:text-white hover:underline-offset-2 ${
    logo ? "text-white" : pathname === href ? "text-white underline" : textColor
  } ${logo ? "no-underline" : ""}`; //

  return (
    <Link href={href} {...props}>
      <Tag className={classNames}>{children}</Tag>
    </Link>
  );
};
