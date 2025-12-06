"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";

/*Icons*/
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuCheck } from "react-icons/lu";

const EMAIL = "henry.lee746@gmail.com";

const DATA = [
  {
    icon: () => <FiGithub className="size-6 sm:size-7 xl:size-8" />,
    name: "GitHub",
    href: "https://github.com/henrylee746",
  },
  {
    icon: () => <FaLinkedinIn className="size-6 sm:size-7 xl:size-8" />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hlee750/",
  },
];

export default function SocialLinksDock() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="h-[58px] sm:h-[60px] xl:h-[75px] gap-4 md:gap-6 px-4"
          disableMagnification={true}
        >
          {DATA.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon-lg" }),
                      "size-14 rounded-full"
                    )}
                  >
                    <item.icon />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {/* Copy Email Button */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon-lg" }),
                    "size-14 rounded-full"
                  )}
                >
                  {copied ? (
                    <LuCheck className="size-6 sm:size-7 xl:size-8 text-green-500" />
                  ) : (
                    <HiOutlineMail className="size-6 sm:size-7 xl:size-8" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? "Copied!" : "Copy Email"}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
