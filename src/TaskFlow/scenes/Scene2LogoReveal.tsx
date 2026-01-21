import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { AppIcon } from '../components/ui/AppIcon';
import { COLORS } from '../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, LETTER_SPACING } from '../constants/typography';

export const Scene2LogoReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Background circle expansion
  const circleScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  
  // Brand name animation
  const brandOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const brandScale = interpolate(frame, [30, 50], [0.95, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  // Tagline animation
  const taglineOpacity = interpolate(frame, [50, 70], [0, 1], {
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
      {/* Expanding circle background */}
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(139, 92, 246, 0.1)',
          transform: `scale(${circleScale})`,
        }}
      />
      
      {/* App Icon */}
      <div style={{ marginBottom: 24 }}>
        <AppIcon size={120} delay={0} />
      </div>
      
      {/* Brand Name */}
      <div
        style={{
          opacity: brandOpacity,
          transform: `scale(${brandScale})`,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            fontSize: FONT_SIZES.h2,
            fontFamily: FONTS.display,
            fontWeight: FONT_WEIGHTS.black,
            color: COLORS.text.primary,
            textAlign: 'center',
            lineHeight: LINE_HEIGHTS.tight,
            letterSpacing: LETTER_SPACING.tight,
          }}
        >
          TaskFlow
        </div>
      </div>
      
      {/* Tagline */}
      <div style={{ opacity: taglineOpacity }}>
        <div
          style={{
            fontSize: FONT_SIZES.lg,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.regular,
            color: COLORS.text.tertiary,
            textAlign: 'center',
          }}
        >
          Your Ultimate Productivity Companion
        </div>
      </div>
    </AbsoluteFill>
  );
};
