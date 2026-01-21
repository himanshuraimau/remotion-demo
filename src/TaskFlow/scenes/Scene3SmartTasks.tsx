import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { PhoneMockup } from '../components/PhoneMockup';
import { TaskCard } from '../components/ui/TaskCard';
import { staggerDelay } from '../constants/animations';
import { COLORS } from '../constants/colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from '../constants/typography';

export const Scene3SmartTasks: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const phoneScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });
  
  const tasks = [
    { title: 'Review project proposal', category: 'Work', time: '2:00 PM', delay: staggerDelay(0) + 20 },
    { title: 'Team meeting', category: 'Work', time: '3:30 PM', delay: staggerDelay(1) + 20 },
    { title: 'Buy groceries', category: 'Personal', time: '6:00 PM', delay: staggerDelay(2) + 20 },
    { title: 'Gym workout', category: 'Health', time: '7:30 PM', delay: staggerDelay(3) + 20 },
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
      <div style={{ transform: `scale(${phoneScale})`, marginLeft: -200 }}>
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
            My Tasks
          </div>
          
          {/* Task Cards */}
          {tasks.map((task, i) => (
            <TaskCard key={i} {...task} />
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
          Smart Task Organization
        </div>
      </div>
    </AbsoluteFill>
  );
};
