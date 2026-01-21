import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { PhoneMockup } from '../components/PhoneMockup';
import { ProgressBar } from '../components/ui/ProgressBar';
import { staggerDelay } from '../constants/animations';
import { COLORS } from '../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../constants/typography';

const StatCard: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => {
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
        backgroundColor: COLORS.background.card,
        padding: 16,
        borderRadius: 12,
        textAlign: 'center',
        flex: 1,
        border: `1px solid ${COLORS.border}`,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div
        style={{
          fontSize: FONT_SIZES.h3,
          fontFamily: FONTS.display,
          fontWeight: FONT_WEIGHTS.black,
          color: COLORS.primary.DEFAULT,
          marginBottom: 4,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: FONT_SIZES.small,
          fontFamily: FONTS.body,
          fontWeight: FONT_WEIGHTS.medium,
          color: COLORS.text.tertiary,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const Scene5ProgressTracking: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Feature label animation
  const labelOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(circle at center, #1E293B 0%, #0F172A 100%)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ marginLeft: -200 }}>
        <PhoneMockup scale={0.9}>
          {/* Header */}
          <div
            style={{
              fontSize: FONT_SIZES.h3,
              fontFamily: FONTS.display,
              fontWeight: FONT_WEIGHTS.bold,
              color: COLORS.text.primary,
              marginBottom: 24,
            }}
          >
            Your Progress
          </div>
          
          {/* Stats Grid */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
            <StatCard value="24" label="Completed" delay={15} />
            <StatCard value="8" label="In Progress" delay={20} />
          </div>
          
          {/* Progress Bars */}
          <ProgressBar label="Work Tasks" percentage={85} delay={staggerDelay(0) + 25} />
          <ProgressBar label="Personal Goals" percentage={65} delay={staggerDelay(1) + 25} />
          <ProgressBar label="Health & Fitness" percentage={92} delay={staggerDelay(2) + 25} />
        </PhoneMockup>
      </div>
      
      {/* Feature Label */}
      <div
        style={{
          position: 'absolute',
          right: '10%',
          opacity: labelOpacity,
          background: 'rgba(30, 41, 59, 0.9)',
          backdropFilter: 'blur(12px)',
          padding: '16px 24px',
          borderRadius: 12,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            fontSize: FONT_SIZES.lg,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.semibold,
            color: COLORS.text.primary,
            lineHeight: LINE_HEIGHTS.normal,
          }}
        >
          Track Your Progress
        </div>
      </div>
    </AbsoluteFill>
  );
};
