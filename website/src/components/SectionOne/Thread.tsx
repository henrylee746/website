"use client";
import React from "react";
import Threads from "../ui/threads";

export const ThreadsBackground = React.memo(() => {
    return (
        <div className="absolute inset-0">
            <Threads
                amplitude={5}
                distance={0.6}
                enableMouseInteraction={false}
            />
        </div>
    );
});

ThreadsBackground.displayName = "ThreadsBackground";
