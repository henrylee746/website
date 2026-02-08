"use client";
import Threads from "../ui/threads";

export const ThreadsBackground = () => {
    return (
        <div className="absolute inset-0">
            <Threads
                amplitude={5}
                distance={0.6}
                enableMouseInteraction={false}
            />
        </div>
    );
};
