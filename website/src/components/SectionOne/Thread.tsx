"use client";
import Threads from "../ui/threads";
import { useIsMobile } from "../mobile";

export const ThreadsBackground = () => {
    const isMobile = useIsMobile();
    return (
        <>
            {isMobile ? null : (
                <div className="absolute inset-0">
                    <Threads
                        amplitude={5}
                        distance={0.6}
                        enableMouseInteraction={false}
                    />
                </div>
            )}
        </>
    );
};
