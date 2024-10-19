"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { CheckIcon, CaretSortIcon } from "@radix-ui/react-icons";

interface ScreenRecorderModeSelectorProps {
  onSelectMode: (mode: string) => void;
}

const MODES = [
  {
    label: "Screen",
    description: "This option records only your screen.",
    hoverDescription: "This option is perfect for capturing screen content like tutorials or presentations.",
  },
  {
    label: "Camera",
    description: "This option records only your camera.",
    hoverDescription: "This option is perfect for recording personal videos, meetings, or vlogs.",
  },
  {
    label: "Screen + Camera",
    description: "This option records both screen and camera.",
    hoverDescription: "This option is perfect for creating engaging content with both screen and face recordings.",
  },
];

export const ModelSelector: React.FC<ScreenRecorderModeSelectorProps> = ({
  onSelectMode,
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedMode, setSelectedMode] = React.useState<string>(MODES[0].label);

  const handleSelect = (mode: string) => {
    setSelectedMode(mode);
    onSelectMode(mode);
    setOpen(false);
  };

  return (
    <div className="flex flex-col w-11/12 gap-1 p-2">
      <Label htmlFor="recorder-mode pb-5">Record</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between text-mono text-primary/80">
            {selectedMode}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[400px]">
          <div className="grid gap-2 p-2">
            {MODES.map((mode) => (
              <HoverCard key={mode.label} openDelay={50} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <div
                    className="flex w-full justify-between items-center cursor-pointer py-2 px-3 rounded hover:bg-muted"
                    onClick={() => handleSelect(mode.label)}
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold">{mode.label}</span>
                      <span className="text-xs text-muted-foreground">{mode.description}</span>
                    </div>
                    {selectedMode === mode.label && <CheckIcon className="ml-auto h-4 w-4" />}
                  </div>
                </HoverCardTrigger>
                <HoverCardContent align="start" side="left" className="w-[240px] text-sm p-3">
                  {mode.hoverDescription}
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
