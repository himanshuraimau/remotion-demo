import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS } from '../../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../../constants/typography';
import { CARD_PADDING } from '../../constants/spacing';

interface TaskCardProps {
  title: string;
  category: string;
  time?: string;
  delay?: number;
}

export const TaskCard: React.FC<TaskCardProps> = ({ title, category, time, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  
  const x = interpolate(frame - delay, [0, 20], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  if (scale < 0.01) return null;
  
  return (
    <div
      style={{
        width: 335,
        padding: CARD_PADDING.all,
        borderRadius: 16,
        background: COLORS.background.card,
        border: `1px solid ${COLORS.border}`,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        transform: `translateX(${x}px) scale(${scale})`,
        opacity,
        marginBottom: 16,
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: FONT_SIZES.body,
          fontFamily: FONTS.body,
          fontWeight: FONT_WEIGHTS.semibold,
          color: COLORS.text.primary,
          lineHeight: LINE_HEIGHTS.normal,
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      
      {/* Metadata */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Category Tag */}
        <div
          style={{
            display: 'inline-flex',
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: FONT_SIZES.tiny,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.medium,
            background: 'rgba(139, 92, 246, 0.15)',
            color: COLORS.primary.light,
          }}
        >
          {category}
        </div>
        
        {/* Time */}
        {time && (
          <div
            style={{
              fontSize: FONT_SIZES.small,
              fontFamily: FONTS.body,
              fontWeight: FONT_WEIGHTS.regular,
              color: COLORS.text.tertiary,
            }}
          >
            {time}
          </div>
        )}
      </div>
    </div>
  );
};
