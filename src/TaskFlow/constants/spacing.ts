// Spacing Scale (8px base unit)

export const SPACING = {
  xs: 8,    // Tight spacing (icon to text)
  sm: 12,   // Card internal padding
  md: 16,   // Between elements in a group
  lg: 24,   // Between sections
  xl: 32,   // Between major sections
  xxl: 48,  // Top/bottom screen padding
};

// Safe Areas for Phone Mockup
export const SAFE_AREAS = {
  top: 47,      // Top safe area (notch)
  bottom: 34,   // Bottom safe area (home indicator)
  horizontal: 20, // Left/right margins
};

// Phone Dimensions
export const PHONE = {
  width: 375,
  height: 812,
  borderRadius: 50,
  border: 12,
  usableWidth: 375 - (SAFE_AREAS.horizontal * 2), // 335px
  usableHeight: 812 - SAFE_AREAS.top - SAFE_AREAS.bottom, // 731px
};

// Card Padding
export const CARD_PADDING = {
  all: 16,
  top: 16,
  right: 16,
  bottom: 16,
  left: 16,
};

// Screen-Level Padding (inside safe area)
export const SCREEN_PADDING = {
  top: 24,
  horizontal: 20,
  bottom: 24,
};
