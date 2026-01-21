import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS } from '../../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS } from '../../constants/typography';

interface TimeSlotProps {
  time: string;
  title: string;
  duration?: string;
  isAISuggested?: boolean;
  delay?: number;
}

export const TimeSlot: React.FC<TimeSlotProps> = ({
  time,
  title,
  duration,
  isAISuggested = false,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  if (scale < 0.01) return null;
  
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        backgroundColor: isAISuggested ? COLORS.primary.DEFAULT : COLORS.background.card,
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
        border: isAISuggested ? 'none' : `1px solid ${COLORS.border}`,
        boxShadow: isAISuggested ? '0 4px 16px rgba(139, 92, 246, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}
    >
      {/* AI Badge */}
      {isAISuggested && (
        <div
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            fontSize: 11,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.semibold,
            background: 'rgba(6, 182, 212, 0.2)',
            color: COLORS.accent.light,
            padding: '4px 8px',
            borderRadius: 4,
          }}
        >
          AI Suggested
        </div>
      )}
      
      {/* Time */}
      <div
        style={{
          fontSize: FONT_SIZES.small,
          fontFamily: FONTS.body,
          fontWeight: FONT_WEIGHTS.medium,
          color: isAISuggested ? 'rgba(255, 255, 255, 0.8)' : COLORS.text.tertiary,
          marginBottom: 6,
        }}
      >
        {time}
      </div>
      
      {/* Title */}
      <div
        style={{
          fontSize: FONT_SIZES.body,
          fontFamily: FONTS.body,
          fontWeight: FONT_WEIGHTS.semibold,
          color: isAISuggested ? '#FFFFFF' : COLORS.text.primary,
          marginBottom: duration ? 4 : 0,
        }}
      >
        {title}
      </div>
      
      {/* Duration */}
      {duration && (
        <div
          style={{
            fontSize: FONT_SIZES.tiny,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.regular,
            color: isAISuggested ? 'rgba(255, 255, 255, 0.7)' : COLORS.text.muted,
          }}
        >
          {duration}
        </div>
      )}
    </div>
  );
};
