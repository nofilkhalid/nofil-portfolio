import { Image } from 'expo-image';
import { SymbolView, type SymbolViewProps } from 'expo-symbols';
import type { ReactNode } from 'react';
import { Linking, Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { fontSize, iconSize, radius, spacing, useTheme } from '@/constants/theme';
import { profile } from '@/data/profile';

type SymbolName = SymbolViewProps['name'];

export function Avatar({ size = 128 }: { size?: number }) {
  const c = useTheme();
  const frame = { width: size, height: size, borderRadius: size / 2 };

  if (profile.photo) {
    return (
      <Image
        source={profile.photo}
        style={[frame, { borderWidth: 3, borderColor: c.card }]}
        contentFit="cover"
        contentPosition="top"
        accessibilityLabel={`Photo of ${profile.name}`}
      />
    );
  }

  return (
    <View
      style={[styles.avatarFallback, frame, { backgroundColor: c.accentSoft, borderColor: c.card }]}
      accessible
      accessibilityRole="image"
      accessibilityLabel={`${profile.name}, photo placeholder`}>
      <Text style={[styles.avatarInitials, { color: c.onAccentSoft, fontSize: size * 0.34 }]}>{profile.initials}</Text>
    </View>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const c = useTheme();
  return <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }, style]}>{children}</View>;
}

export function SectionTitle({ children }: { children: string }) {
  const c = useTheme();
  return (
    <Text style={[styles.sectionTitle, { color: c.foreground }]} accessibilityRole="header">
      {children}
    </Text>
  );
}

export function Chip({ label }: { label: string }) {
  const c = useTheme();
  return (
    <View style={[styles.chip, { backgroundColor: c.muted }]}>
      <Text style={[styles.chipText, { color: c.foreground }]}>{label}</Text>
    </View>
  );
}

export function Bullet({ children }: { children: string }) {
  const c = useTheme();
  return (
    <View style={styles.bulletRow}>
      <View style={[styles.bulletDot, { backgroundColor: c.accent }]} />
      <Text style={[styles.body, { color: c.foreground, flex: 1 }]}>{children}</Text>
    </View>
  );
}

type ButtonProps = {
  label: string;
  icon: SymbolName;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  accessibilityHint?: string;
};

export function ActionButton({ label, icon, onPress, variant = 'secondary', accessibilityHint }: ButtonProps) {
  const c = useTheme();
  const primary = variant === 'primary';
  const fg = primary ? c.onAccent : c.foreground;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      android_ripple={{ color: c.pressed }}
      style={({ pressed }) => [
        styles.button,
        primary
          ? { backgroundColor: c.accent }
          : { backgroundColor: c.card, borderColor: c.border, borderWidth: StyleSheet.hairlineWidth * 2 },
        pressed && { opacity: 0.85 },
      ]}>
      <SymbolView name={icon} size={iconSize.md} tintColor={fg} />
      <Text style={[styles.buttonLabel, { color: fg }]}>{label}</Text>
    </Pressable>
  );
}

export function ContactRow() {
  return (
    <View style={styles.contactRow}>
      <View style={styles.contactItem}>
        <ActionButton
          label="Email"
          icon={{ ios: 'envelope', android: 'mail', web: 'mail' }}
          onPress={() => Linking.openURL(`mailto:${profile.email}`)}
          accessibilityHint="Opens your email app"
        />
      </View>
      <View style={styles.contactItem}>
        <ActionButton
          label="LinkedIn"
          icon={{ ios: 'person.crop.square', android: 'person', web: 'person' }}
          onPress={() => Linking.openURL(profile.linkedin)}
          accessibilityHint="Opens LinkedIn profile"
        />
      </View>
    </View>
  );
}

export const textStyles = StyleSheet.create({
  body: { fontSize: fontSize.body, lineHeight: 24 },
  caption: { fontSize: fontSize.caption, lineHeight: 18 },
});

const styles = StyleSheet.create({
  avatarFallback: { alignItems: 'center', justifyContent: 'center', borderWidth: 3 },
  avatarInitials: { fontWeight: '700', letterSpacing: 1 },
  card: { borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth * 2, padding: spacing.md },
  sectionTitle: { fontSize: fontSize.title, fontWeight: '700', marginBottom: spacing.md },
  chip: { borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 6 },
  chipText: { fontSize: 14, fontWeight: '500' },
  bulletRow: { flexDirection: 'row', gap: spacing.sm + 2, alignItems: 'flex-start' },
  bulletDot: { width: 6, height: 6, borderRadius: 3, marginTop: 9 },
  body: textStyles.body,
  button: {
    minHeight: 48,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    overflow: 'hidden',
  },
  buttonLabel: { fontSize: fontSize.body, fontWeight: '600' },
  contactRow: { flexDirection: 'row', gap: spacing.sm + 4 },
  contactItem: { flex: 1 },
});
