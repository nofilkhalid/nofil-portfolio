import { useColorScheme } from 'react-native';

// Semantic color tokens. Monochrome base with a single blue accent.
// Every text/background pair below meets WCAG AA (4.5:1) for body text.
const light = {
  background: '#FAFAFA',
  card: '#FFFFFF',
  foreground: '#09090B',
  mutedForeground: '#475569',
  muted: '#EEF2F6',
  border: '#E4E4E7',
  accent: '#2563EB',
  onAccent: '#FFFFFF',
  accentSoft: '#DBEAFE',
  onAccentSoft: '#1E3A8A',
  pressed: 'rgba(9, 9, 11, 0.06)',
};

const dark: typeof light = {
  background: '#09090B',
  card: '#18181B',
  foreground: '#FAFAFA',
  mutedForeground: '#A1A1AA',
  muted: '#27272A',
  border: '#27272A',
  accent: '#60A5FA',
  onAccent: '#09090B',
  accentSoft: '#1E293B',
  onAccentSoft: '#BFDBFE',
  pressed: 'rgba(250, 250, 250, 0.08)',
};

export type ThemeColors = typeof light;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 } as const;
export const radius = { sm: 8, md: 12, lg: 16, pill: 999 } as const;
export const fontSize = { caption: 13, body: 16, lead: 17, title: 20, h2: 24, h1: 32 } as const;
export const iconSize = { sm: 16, md: 20, lg: 24 } as const;

// Keeps long text at a readable width on tablets and web.
export const contentMaxWidth = 720;

export function useTheme(): ThemeColors {
  return useColorScheme() === 'dark' ? dark : light;
}
