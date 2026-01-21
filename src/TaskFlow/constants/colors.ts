// Refined Color Palette - No muddy greys

export const COLORS = {
  // Background
  background: {
    dark: '#0F172A',      // Deep slate
    card: '#1E293B',      // Card background
    elevated: '#334155',  // Hover/active states
  },
  
  // Primary Brand (Purple)
  primary: {
    DEFAULT: '#8B5CF6',   // Vibrant purple
    light: '#A78BFA',     // Lighter variant
    dark: '#7C3AED',      // Darker variant
  },
  
  // Accent (Cyan)
  accent: {
    DEFAULT: '#06B6D4',   // Cyan 500
    light: '#22D3EE',     // Cyan 400
  },
  
  // Text Hierarchy
  text: {
    primary: '#F8FAFC',   // Bright white (headlines)
    secondary: '#CBD5E1', // Light grey (body)
    tertiary: '#94A3B8',  // Mid grey (metadata)
    muted: '#64748B',     // Dark grey (disabled)
  },
  
  // Semantic Colors
  success: '#10B981',     // Green
  warning: '#F59E0B',     // Amber
  error: '#EF4444',       // Red
  
  // UI Elements
  border: '#334155',      // Subtle borders
  divider: '#1E293B',     // Section dividers
};

export const GRADIENTS = {
  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  primary: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #06B6D4 100%)',
  progress: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)',
};
