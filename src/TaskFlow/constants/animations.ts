// Animation Constants

export const EASING = {
  smooth: [0.4, 0, 0.2, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
};

export const SPRING_CONFIG = {
  smooth: { damping: 15, stiffness: 120, mass: 0.5 },
  bouncy: { damping: 10, stiffness: 100, mass: 0.8 },
  stiff: { damping: 20, stiffness: 200, mass: 0.5 },
};

export const DURATION = {
  fast: 0.2,      // 6 frames at 30fps
  normal: 0.4,    // 12 frames at 30fps
  slow: 0.8,      // 24 frames at 30fps
};

export const staggerDelay = (index: number) => index * 5; // 5 frames = 0.16s at 30fps
