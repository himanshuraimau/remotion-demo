import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, GRADIENTS } from '../../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS } from '../../constants/typography';

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  
  const width = interpolate(progress, [0, 1], [0, percentage]);
  
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  if (progress < 0.01) return null;
  
  return (
    <div style={{ marginBottom: 24, opacity }}>
      {/* Label and Percentage */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span
          style={{
            fontSize: FONT_SIZES.small,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.medium,
            color: COLORS.text.secondary,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: FONT_SIZES.body,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.bold,
            color: COLORS.primary.DEFAULT,
          }}
        >
          {Math.round(width)}%
        </span>
      </div>
      
      {/* Progress Bar Track */}
      <div
        style={{
          height: 8,
          width: '100%',
          borderRadius: 4,
          background: COLORS.background.elevated,
          overflow: 'hidden',
        }}
      >
        {/* Progress Bar Fill */}
        <div
          style={{
            height: '100%',
            width: `${width}%`,
            background: GRADIENTS.progress,
            borderRadius: 4,
            transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  );
};
