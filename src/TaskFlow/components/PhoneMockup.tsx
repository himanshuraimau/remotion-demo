import { AbsoluteFill } from 'remotion';
import { PHONE, SAFE_AREAS } from '../constants/spacing';
import { COLORS } from '../constants/colors';

interface PhoneMockupProps {
  children: React.ReactNode;
  scale?: number;
  rotation?: { x?: number; y?: number };
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  children, 
  scale = 1,
  rotation = { x: 2, y: -5 }
}) => {
  return (
    <div
      style={{
        width: PHONE.width,
        height: PHONE.height,
        transform: `scale(${scale}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        position: 'relative',
        borderRadius: PHONE.borderRadius,
        overflow: 'hidden',
        boxShadow: '0 40px 120px rgba(0, 0, 0, 0.5)',
        border: `${PHONE.border}px solid ${COLORS.background.card}`,
        perspective: '1000px',
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 120,
          height: 30,
          backgroundColor: COLORS.background.card,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          zIndex: 10,
        }}
      />
      
      {/* Screen content with safe areas */}
      <AbsoluteFill style={{ backgroundColor: COLORS.background.dark }}>
        {/* Status Bar */}
        <div
          style={{
            position: 'absolute',
            top: SAFE_AREAS.top,
            left: SAFE_AREAS.horizontal,
            right: SAFE_AREAS.horizontal,
            height: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 12,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            color: COLORS.text.tertiary,
            zIndex: 5,
          }}
        >
          <span>9:41</span>
          <span>●●●●</span>
        </div>
        
        {/* Content Area (respects safe areas) */}
        <div
          style={{
            position: 'absolute',
            top: SAFE_AREAS.top + 24 + 16, // Status bar + margin
            left: SAFE_AREAS.horizontal,
            right: SAFE_AREAS.horizontal,
            bottom: SAFE_AREAS.bottom,
            overflow: 'hidden',
          }}
        >
          {children}
        </div>
      </AbsoluteFill>
    </div>
  );
};
