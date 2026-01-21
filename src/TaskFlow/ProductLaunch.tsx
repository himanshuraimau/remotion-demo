import { AbsoluteFill, Sequence } from 'remotion';
import { Scene1Problem } from './scenes/Scene1Problem';
import { Scene2LogoReveal } from './scenes/Scene2LogoReveal';
import { Scene3SmartTasks } from './scenes/Scene3SmartTasks';
import { Scene4AIScheduling } from './scenes/Scene4AIScheduling';
import { Scene5ProgressTracking } from './scenes/Scene5ProgressTracking';
import { Scene6CallToAction } from './scenes/Scene6CallToAction';

export const ProductLaunch: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#1A1A2E' }}>
      {/* Scene 1: Problem (0-4s, frames 0-120) */}
      <Sequence from={0} durationInFrames={120}>
        <Scene1Problem />
      </Sequence>
      
      {/* Scene 2: Logo Reveal (4-6.5s, frames 120-195) */}
      <Sequence from={120} durationInFrames={75}>
        <Scene2LogoReveal />
      </Sequence>
      
      {/* Scene 3: Smart Tasks (6.5-11s, frames 195-330) */}
      <Sequence from={195} durationInFrames={135}>
        <Scene3SmartTasks />
      </Sequence>
      
      {/* Scene 4: AI Scheduling (11-15.5s, frames 330-465) */}
      <Sequence from={330} durationInFrames={135}>
        <Scene4AIScheduling />
      </Sequence>
      
      {/* Scene 5: Progress Tracking (15.5-20s, frames 465-600) */}
      <Sequence from={465} durationInFrames={135}>
        <Scene5ProgressTracking />
      </Sequence>
      
      {/* Scene 6: CTA (20-25s, frames 600-750) */}
      <Sequence from={600} durationInFrames={150}>
        <Scene6CallToAction />
      </Sequence>
    </AbsoluteFill>
  );
};
