import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { FONTS, FONT_SIZES, FONT_WEIGHTS } from '../../constants/typography';

interface DownloadButtonProps {
  platform: 'appStore' | 'googlePlay';
  delay?: number;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ platform, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 120 },
  });
  
  const hoverScale = interpolate(
    Math.sin((frame - delay) * 0.1),
    [-1, 1],
    [1, 1.02]
  );
  
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  if (scale < 0.01) return null;
  
  const isAppStore = platform === 'appStore';
  
  return (
    <div
      style={{
        width: 180,
        height: 60,
        padding: '12px 20px',
        borderRadius: 12,
        background: isAppStore ? '#000000' : '#FFFFFF',
        border: isAppStore ? 'none' : '2px solid #000000',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        transform: `scale(${scale * hoverScale})`,
        opacity,
        cursor: 'pointer',
      }}
    >
      {/* Logo SVG */}
      <div style={{ width: 24, height: 24 }}>
        {isAppStore ? (
          // Apple Logo SVG
          <svg viewBox="0 0 24 24" fill="#FFFFFF" width="24" height="24">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
        ) : (
          // Google Play Triangle
          <svg viewBox="0 0 24 24" fill="#000000" width="24" height="24">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
        )}
      </div>
      
      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div
          style={{
            fontSize: 10,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.regular,
            color: isAppStore ? '#FFFFFF' : '#000000',
            lineHeight: 1,
          }}
        >
          {isAppStore ? 'Download on the' : 'GET IT ON'}
        </div>
        <div
          style={{
            fontSize: FONT_SIZES.small,
            fontFamily: FONTS.body,
            fontWeight: FONT_WEIGHTS.semibold,
            color: isAppStore ? '#FFFFFF' : '#000000',
            lineHeight: 1.2,
          }}
        >
          {isAppStore ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </div>
  );
};
