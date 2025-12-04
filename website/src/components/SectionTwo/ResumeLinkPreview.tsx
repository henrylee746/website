"use client";
import { LinkPreview } from "@/components/ui/link-preview";

export function ResumeLinkPreview() {
  return (
    <div className="flex justify-center items-center h-[100px] mt-4 flex-col px-4">
      <span className="text-neutral-500 dark:text-neutral-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
        Or Visit{" "}
        <LinkPreview
          url="https://icy-morning-122.linkyhost.com"
          className="font-bold"
        >
          My Resume
        </LinkPreview>
      </span>
    </div>
  );
}
