import { Globe } from "@/components/ui/globe";

export function WorldGlobe() {
  return (
    <div className="flex size-full items-center justify-center overflow-hidden ">
      <Globe className="top-2" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
