"use client";
import { RetroGrid } from "@/components/ui/retro-grid";

export function RetroGridComponent() {
  return (
    <div className="bg-background relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border p-4">
      <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-3xl md:text-5xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent">
        There are only two hard things in Computer Science: cache invalidation
        and naming things.
        <br />- Phil Karlton
      </span>
      <RetroGrid />
    </div>
  );
}
