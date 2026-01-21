import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, GRADIENTS } from '../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, LETTER_SPACING } from '../constants/typography';

const TaskIcon: React.FC<{ x: number; y: number; delay: number; icon: string; size: number }> = ({ 
  x, y, delay, icon, size 
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const fall = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 80 },
  });
  
  const rotate = interpolate(
    frame - delay,
    [0, 60],
    [0, 180],
    { extrapolateRight: 'clamp' }
  );
  
  const shake = Math.sin((frame - delay) * 0.2) * 2;
  
  const opacity = interpolate(frame, [delay, delay + 15], [0, 0.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y + (fall * 400),
        transform: `rotate(${rotate}deg) translateX(${shake}px)`,
        fontSize: size,
        opacity,
      }}
    >
      {icon}
    </div>
  );
};

export const Scene1Problem: React.FC = () => {
  const frame = useCurrentFrame();
  
  const icons = [
    { x: 200, y: -100, delay: 0, icon: '📧', size: 40 },
    { x: 800, y: -150, delay: 5, icon: '📅', size: 48 },
    { x: 1400, y: -80, delay: 10, icon: '✅', size: 32 },
    { x: 400, y: -200, delay: 15, icon: '📝', size: 44 },
    { x: 1200, y: -120, delay: 20, icon: '⏰', size: 36 },
    { x: 600, y: -180, delay: 8, icon: '🔔', size: 40 },
    { x: 1000, y: -90, delay: 12, icon: '📊', size: 48 },
    { x: 300, y: -160, delay: 18, icon: '💼', size: 38 },
    { x: 1500, y: -140, delay: 22, icon: '📱', size: 42 },
    { x: 500, y: -110, delay: 14, icon: '💬', size: 36 },
  ];
  
  // Text animation
  const textOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const textScale = interpolate(frame, [30, 50], [0.95, 1], {
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
      {icons.map((icon, i) => (
        <TaskIcon key={i} {...icon} />
      ))}
      
      <div 
        style={{ 
          zIndex: 10,
          opacity: textOpacity,
          transform: `scale(${textScale})`,
          padding: '0 48px',
        }}
      >
        <div
          style={{
            fontSize: FONT_SIZES.h1,
            fontFamily: FONTS.display,
            fontWeight: FONT_WEIGHTS.black,
            color: COLORS.text.primary,
            textAlign: 'center',
            lineHeight: LINE_HEIGHTS.tight,
            letterSpacing: LETTER_SPACING.tight,
          }}
        >
          Overwhelmed by tasks?
        </div>
      </div>
    </AbsoluteFill>
  );
};
