# Remotion Product Launch Video Demo

A professional product launch video demo created with [Remotion](https://www.remotion.dev/). This repository showcases how to build high-quality, animated product videos using React and TypeScript.

## 🎬 Demo Video

**TaskFlow - Product Launch Video**
- **Duration**: 25 seconds
- **Resolution**: 1920×1080 (Full HD)
- **Format**: MP4

This demo features a fictional productivity app called "TaskFlow" to demonstrate Remotion's capabilities for creating professional product launch videos.

## ✨ What's Included

### Professional Design System
- **Typography**: Inter + Satoshi fonts with proper hierarchy
- **Color Palette**: Modern purple/cyan theme with dark backgrounds
- **Spacing System**: 8px base unit with mobile safe areas
- **Animations**: Spring physics and smooth transitions

### Reusable Components
- **AppIcon**: Gradient logo with animations
- **TaskCard**: Clean card components with shadows
- **ProgressBar**: Animated progress indicators
- **TimeSlot**: Calendar time slot components
- **DownloadButton**: App store buttons with SVG logos
- **PhoneMockup**: iPhone-style frame with 3D perspective

### 6 Animated Scenes
1. **Problem Statement**: Falling icons with chaos effect
2. **Logo Reveal**: Brand introduction with expanding circle
3. **Feature Showcase 1**: Task organization
4. **Feature Showcase 2**: AI scheduling
5. **Feature Showcase 3**: Progress tracking
6. **Call to Action**: Download buttons and final CTA

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/remotion-demo.git
cd remotion-demo

# Install dependencies
npm install
```

### Development

```bash
# Start Remotion Studio
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview and edit the video in your browser.

### Build Video

```bash
# Render the video
npm run build

# Output: out/taskflow.mp4
```

## 📁 Project Structure

```
src/
├── TaskFlow/                     # Main video project
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── AppIcon.tsx
│   │   │   ├── TaskCard.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── TimeSlot.tsx
│   │   │   └── DownloadButton.tsx
│   │   ├── PhoneMockup.tsx       # iPhone frame component
│   │   └── AnimatedText.tsx      # Text animations
│   ├── constants/                # Design system constants
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── animations.ts
│   ├── scenes/                   # Individual video scenes
│   │   ├── Scene1Problem.tsx
│   │   ├── Scene2LogoReveal.tsx
│   │   ├── Scene3SmartTasks.tsx
│   │   ├── Scene4AIScheduling.tsx
│   │   ├── Scene5ProgressTracking.tsx
│   │   └── Scene6CallToAction.tsx
│   └── ProductLaunch.tsx         # Main composition
├── Root.tsx                      # Remotion root
└── index.css                     # Global styles
```

## 🎨 Customization Guide

### Change Video Content

1. **Update App Name**: Edit `Scene2LogoReveal.tsx`
2. **Modify Features**: Edit scene files in `scenes/` folder
3. **Change Colors**: Edit `constants/colors.ts`
4. **Adjust Timing**: Edit `ProductLaunch.tsx` sequence durations

### Example: Change Primary Color

```typescript
// src/TaskFlow/constants/colors.ts
export const COLORS = {
  primary: {
    DEFAULT: '#8B5CF6',  // Change this to your brand color
  },
};
```

### Example: Adjust Scene Duration

```typescript
// src/TaskFlow/ProductLaunch.tsx
<Sequence from={0} durationInFrames={120}>  // 4 seconds at 30fps
  <Scene1Problem />
</Sequence>
```

## 🛠️ Technologies

- **[Remotion](https://www.remotion.dev/)** - Video creation with React
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling (v4)

## 📦 Rendering Options

```bash
# Default MP4
npm run build

# Custom quality (lower CRF = higher quality)
npx remotion render TaskFlow out/video.mp4 --crf 18

# Different resolution
npx remotion render TaskFlow out/video.mp4 --height=720 --width=1280

# WebM format
npx remotion render TaskFlow out/video.webm --codec=vp8

# GIF
npx remotion render TaskFlow out/video.gif --codec=gif

# Specific frame range
npx remotion render TaskFlow out/preview.mp4 --frames=0-300
```

## 🎯 Key Features Demonstrated

### Design System
- Consistent color palette and typography
- Mobile-first safe areas (47px top, 34px bottom)
- 8px spacing scale
- Professional shadows and borders

### Animations
- Spring physics for natural motion
- Stagger delays for sequential animations
- Smooth interpolations
- 3D transforms and perspectives

### Components
- Reusable, typed React components
- Props-based customization
- Consistent styling patterns
- Performance optimized

### Video Composition
- Scene-based structure
- Timeline management with Sequences
- Frame-perfect timing
- Deterministic rendering

## 📚 Learn More

- [Remotion Documentation](https://www.remotion.dev/docs)
- [Remotion Examples](https://www.remotion.dev/showcase)
- [React Documentation](https://react.dev)

## 🤝 Contributing

This is a demo project, but contributions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Share your own Remotion projects

## 📄 License

MIT License - feel free to use this as a template for your own videos!

## 🙏 Credits

- Built with [Remotion](https://www.remotion.dev/)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) & [Satoshi](https://www.fontshare.com/fonts/satoshi)
- Inspired by modern product launch videos

---

**Made with ❤️ using Remotion**

*This is a demonstration project showcasing Remotion's capabilities. TaskFlow is a fictional app used for demo purposes.*
