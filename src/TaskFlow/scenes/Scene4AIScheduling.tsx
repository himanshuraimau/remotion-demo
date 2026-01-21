import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { PhoneMockup } from '../components/PhoneMockup';
import { TimeSlot } from '../components/ui/TimeSlot';
import { staggerDelay } from '../constants/animations';
import { COLORS } from '../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../constants/typography';

export const Scene4AIScheduling: React.FC = () => {
  const frame = useCurrentFrame();
  
  const slots = [
    { time: '9:00 AM', title: 'Morning standup', duration: '30 min', isAISuggested: false, delay: staggerDelay(0) + 15 },
    { time: '10:30 AM', title: 'Deep work session', duration: '2 hours', isAISuggested: true, delay: staggerDelay(1) + 15 },
    { time: '12:00 PM', title: 'Lunch break', duration: '1 hour', isAISuggested: false, delay: staggerDelay(2) + 15 },
    { time: '2:00 PM', title: 'Client meeting', duration: '1 hour', isAISuggested: true, delay: staggerDelay(3) + 15 },
    { time: '4:00 PM', title: 'Review & planning', duration: '45 min', isAISuggested: false, delay: staggerDelay(4) + 15 },
  ];
  
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
              marginBottom: 8,
            }}
          >
            Today's Schedule
          </div>
          
          {/* Subheader */}
          <div
            style={{
              fontSize: FONT_SIZES.small,
              fontFamily: FONTS.body,
              fontWeight: FONT_WEIGHTS.medium,
              color: COLORS.accent.DEFAULT,
              marginBottom: 20,
            }}
          >
            AI optimized for productivity
          </div>
          
          {/* Time Slots */}
          {slots.map((slot, i) => (
            <TimeSlot key={i} {...slot} />
          ))}
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
          AI-Powered Scheduling
        </div>
      </div>
    </AbsoluteFill>
  );
};
