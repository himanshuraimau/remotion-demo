import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { AppIcon } from '../components/ui/AppIcon';
import { DownloadButton } from '../components/ui/DownloadButton';
import { COLORS } from '../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, LETTER_SPACING } from '../constants/typography';

export const Scene6CallToAction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Phone preview animation
  const phoneScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });
  
  const phoneRotate = interpolate(frame, [0, 40], [0, 360], {
    extrapolateRight: 'clamp',
  });
  
  // Headline animation
  const headlineOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const headlineScale = interpolate(frame, [40, 60], [0.95, 1], {
    extrapolateRight: 'clamp',
  });
  
  // Subheadline animation
  const subheadlineOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Phone Preview (left side) */}
      <div
        style={{
          position: 'absolute',
          left: '30%',
          transform: `scale(${phoneScale * 0.7}) rotate(${phoneRotate}deg)`,
        }}
      >
        <AppIcon size={160} delay={0} />
      </div>
      
      {/* CTA Content (right side) */}
      <div
        style={{
          position: 'absolute',
          right: '10%',
          maxWidth: 500,
        }}
      >
        {/* Headline */}
        <div
          style={{
            opacity: headlineOpacity,
            transform: `scale(${headlineScale})`,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: FONT_SIZES.h1,
              fontFamily: FONTS.display,
              fontWeight: FONT_WEIGHTS.black,
              color: COLORS.background.dark,
              lineHeight: LINE_HEIGHTS.tight,
              letterSpacing: LETTER_SPACING.tight,
            }}
          >
            Download TaskFlow Today
          </div>
        </div>
        
        {/* Subheadline */}
        <div
          style={{
            opacity: subheadlineOpacity,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontSize: FONT_SIZES.lg,
              fontFamily: FONTS.body,
              fontWeight: FONT_WEIGHTS.medium,
              color: COLORS.text.muted,
            }}
          >
            Available on iOS & Android
          </div>
        </div>
        
        {/* Download Buttons */}
        <div style={{ display: 'flex', gap: 16 }}>
          <DownloadButton platform="appStore" delay={80} />
          <DownloadButton platform="googlePlay" delay={90} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
