import { TabList, TabSlot, TabTrigger, Tabs, type TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { contentMaxWidth, fontSize, radius, spacing, useTheme } from '@/constants/theme';
import { profile } from '@/data/profile';

export default function AppTabs() {
  const c = useTheme();

  return (
    <Tabs style={{ flex: 1, backgroundColor: c.background }}>
      <View style={[styles.bar, { backgroundColor: c.card, borderBottomColor: c.border }]}>
        <View style={styles.barInner}>
          <Text style={[styles.brand, { color: c.foreground }]}>{profile.name}</Text>
          <TabList style={styles.list}>
            <TabTrigger name="home" href="/" asChild>
              <TabButton>Home</TabButton>
            </TabTrigger>
            <TabTrigger name="resume" href="/resume" asChild>
              <TabButton>Resume</TabButton>
            </TabTrigger>
          </TabList>
        </View>
      </View>
      <TabSlot style={{ flex: 1 }} />
    </Tabs>
  );
}

function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  const c = useTheme();
  return (
    <Pressable
      {...props}
      accessibilityRole="tab"
      accessibilityState={{ selected: isFocused }}
      style={({ pressed, hovered }) => [
        styles.tab,
        isFocused && { backgroundColor: c.accentSoft },
        !isFocused && (hovered || pressed) && { backgroundColor: c.muted },
      ]}>
      <Text style={[styles.tabLabel, { color: isFocused ? c.onAccentSoft : c.mutedForeground }]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: { borderBottomWidth: 1, paddingHorizontal: spacing.md, alignItems: 'center' },
  barInner: {
    width: '100%',
    maxWidth: contentMaxWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },
  brand: { fontSize: fontSize.body, fontWeight: '700' },
  list: { flexDirection: 'row', gap: spacing.xs },
  tab: { minHeight: 44, paddingHorizontal: spacing.md, borderRadius: radius.pill, justifyContent: 'center' },
  tabLabel: { fontSize: 15, fontWeight: '600' },
});
