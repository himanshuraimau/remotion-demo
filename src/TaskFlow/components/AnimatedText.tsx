import { interpolate, useCurrentFrame } from 'remotion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  fontSize?: number;
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: string;
  letterSpacing?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  fontSize = 72,
  fontWeight = 'bold',
  color = '#000000',
  letterSpacing = '-0.015em',
}) => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const scale = interpolate(frame, [delay, delay + 20], [0.98, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const y = interpolate(frame, [delay, delay + 20], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const fontWeightMap = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  };
  
  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale}) translateY(${y}px)`,
        fontSize: `${fontSize}px`,
        fontWeight: fontWeightMap[fontWeight],
        color,
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        textAlign: 'center',
        letterSpacing,
      }}
    >
      {text}
    </div>
  );
};
