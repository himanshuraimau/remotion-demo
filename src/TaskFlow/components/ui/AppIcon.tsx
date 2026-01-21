import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { GRADIENTS } from '../../constants/colors';

interface AppIconProps {
  size?: number;
  delay?: number;
}

export const AppIcon: React.FC<AppIconProps> = ({ size = 120, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 120 },
  });
  
  const opacity = interpolate(frame - delay, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  // Checkmark path animation
  const pathProgress = interpolate(frame - delay - 15, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  if (scale < 0.01) return null;
  
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.233, // 28px for 120px size
        background: GRADIENTS.primary,
        boxShadow: '0 20px 60px rgba(139, 92, 246, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      {/* Checkmark SVG */}
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M20 6L9 17l-5-5"
          strokeDasharray="30"
          strokeDashoffset={30 * (1 - pathProgress)}
        />
      </svg>
    </div>
  );
};
