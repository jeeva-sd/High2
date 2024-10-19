"use client";

import * as React from "react";
import { SliderProps } from "@radix-ui/react-slider";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "~/components/ui/hover-card";
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";

interface BitrateSelectorProps {
    defaultValue: SliderProps["defaultValue"];
    setVideoQuality: (value: number[]) => void;
}

export function BitrateSelector({
    defaultValue,
    setVideoQuality
}: BitrateSelectorProps) {

    return (
        <div className="grid gap-2 hover:bg-muted p-2 transition-all w-11/12">
            <HoverCard openDelay={100} closeDelay={0}>
                <HoverCardTrigger asChild>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="bitrate">Quality</Label>
                            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                                {defaultValue}
                            </span>
                        </div>
                        <Slider
                            id="bitrate"
                            max={10}
                            defaultValue={defaultValue}
                            step={2}
                            onValueChange={setVideoQuality}
                            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4 cursor-grabbing"
                            aria-label="Temperature"
                        />
                    </div>
                </HoverCardTrigger>
                <HoverCardContent
                    align="start"
                    className="w-[260px] text-sm"
                    side="left"
                >
                    Controls randomness: lowering results in less random completions. As
                    the temperature approaches zero, the model will become deterministic
                    and repetitive.
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}
