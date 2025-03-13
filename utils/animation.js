import { useLottie, useLottieInteractivity } from "lottie-react";

export default function PlayAnimationOnHover({ style, options }) {
  // Ensure that `options` and `style` are passed as props.
  const lottieObj = useLottie(options, style);
  
  // Setup interactivity for cursor-based control of animation.
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "play", // Play the animation when the cursor enters
        frames: [0, 60], // Play from the start to the end
      },
      {
        position: { x: [-1, 1], y: [-1, 1] },
        type: "stop", // Stop the animation when the cursor leaves
        frames: [0], // Stop at the first frame
      },
    ],
  });

  return Animation;
}

  