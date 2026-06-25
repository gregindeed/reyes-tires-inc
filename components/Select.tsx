"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

type Option = { value: string; label: string };

export function Select({
  value,
  onValueChange,
  placeholder,
  options,
  id,
  dark = false,
}: {
  value: string;
  onValueChange: (v: string) => void;
  placeholder: string;
  options: Option[];
  id?: string;
  dark?: boolean;
}) {
  const triggerCls = dark
    ? "flex w-full items-center justify-between rounded-md border border-sand-200/15 bg-ink-950/40 px-3.5 py-2.5 text-[15px] text-sand-50 outline-none transition-colors focus:border-blaze-500 focus:ring-2 focus:ring-blaze-500/25 data-[placeholder]:text-sand-200/40"
    : "flex w-full items-center justify-between rounded-md border border-sand-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-850 outline-none transition-colors focus:border-blaze-500 focus:ring-2 focus:ring-blaze-500/20 data-[placeholder]:text-stone-750/60";

  return (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
      <RadixSelect.Trigger id={id} className={triggerCls}>
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown
            className={`h-4 w-4 ${dark ? "text-sand-200/50" : "text-stone-750/60"}`}
          />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={6}
          className="anim-slide-down z-[60] max-h-72 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-sand-200 bg-white shadow-card"
        >
          <RadixSelect.Viewport className="p-1.5">
            {options.map((o) => (
              <RadixSelect.Item
                key={o.value}
                value={o.value}
                className="flex cursor-pointer items-center justify-between rounded px-3 py-2 text-[15px] text-stone-850 outline-none data-[highlighted]:bg-blaze-50 data-[highlighted]:text-blaze-700"
              >
                <RadixSelect.ItemText>{o.label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator>
                  <Check className="h-4 w-4 text-blaze-600" />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
