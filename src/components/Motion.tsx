"use client";

import {
  motion,
  type HTMLMotionProps,
  type TargetAndTransition,
} from "motion/react";
import type { ReactNode } from "react";

type Preset = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
};

const presets = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "fade-up": {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  },
  "move-right": {
    initial: { x: -50 },
    animate: { x: 0 },
  },
} satisfies Record<string, Preset>;

export type MotionPreset = keyof typeof presets;

type MotionProps = Omit<HTMLMotionProps<"div">, "initial" | "animate"> & {
  children: ReactNode;
  preset?: MotionPreset | MotionPreset[];
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

function combinePresets(presetNames: MotionPreset[]): Preset {
  return presetNames.reduce(
    (combined, presetName) => {
      const preset = presets[presetName];
      return {
        initial: { ...combined.initial, ...preset.initial },
        animate: { ...combined.animate, ...preset.animate },
      };
    },
    { initial: {}, animate: {} },
  );
}

export default function Motion({
  children,
  preset = "fade-up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}: MotionProps) {
  const presetNames = Array.isArray(preset) ? preset : [preset];
  const animation = combinePresets(presetNames);

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
