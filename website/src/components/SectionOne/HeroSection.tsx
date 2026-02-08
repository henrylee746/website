import TechStackDock from "@/components/SectionOne/TechStackDock";
import { TextAnimate } from "@/components/ui/text-animate";
import { ThreadsBackground } from "@/components/SectionOne/Thread";

export const HeroSection = () => {
  return (
    <div className="relative w-screen">
      {/* Memoize the Threads component to prevent re-initialization */}
      <ThreadsBackground />
      {/* Content - positioned above the threads */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-8 pb-12">
        <div className="text-center">
          <TextAnimate
            className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl  mb-6"
            animation="blurIn"
            as="h1"
            once={true}
            delay={0.5}
          >
            Hi, I'm Henry👋
          </TextAnimate>

          <TextAnimate
            className="text-base sm:text-2xl text-slate-600 dark:text-slate-300 max-w-xl md:max-w-3xl mx-auto mb-4"
            as="p"
            animation="blurIn"
            duration={0.5}
            once={true}
          >
            I enjoy working with:
          </TextAnimate>
          <TechStackDock />
        </div>
      </div>
    </div>
  );
};
