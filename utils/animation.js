"use client";

import { useLottie, useLottieInteractivity } from "lottie-react";

export default function PlayAnimationOnHover({ style, options }) {
  const lottieObj = useLottie(options, style);

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "play",
        frames: [0, 60],
      },
      {
        position: { x: [-1, 1], y: [-1, 1] },
        type: "stop",
        frames: [0],
      },
    ],
  });

  return Animation;
}
