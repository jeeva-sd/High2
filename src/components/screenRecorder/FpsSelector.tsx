"use client"

import * as React from "react"
import { SliderProps } from "@radix-ui/react-slider"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import { Label } from "~/components/ui/label"
import { Slider } from "~/components/ui/slider"

interface FpsSelectorProps {
  defaultValue: SliderProps["defaultValue"]
  setVideoFps: (value: number[]) => void;
}

export function FpsSelector({
  defaultValue,
  setVideoFps
}: FpsSelectorProps) {

  return (
    <div className="grid gap-2 pt-2 w-11/12">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="fps">FPS</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {defaultValue}
              </span>
            </div>
            <Slider
              id="fps"
              max={60}
              defaultValue={defaultValue}
              step={15}
              onValueChange={setVideoFps}
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
  )
}
