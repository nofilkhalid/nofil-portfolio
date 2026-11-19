import type { ReactNode } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { contentMaxWidth, spacing, useTheme } from '@/constants/theme';

// Scrollable page shell: safe-area aware, centred, capped at a readable width.
export function Screen({ children }: { children: ReactNode }) {
  const c = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: c.background }}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: Platform.OS === 'web' ? spacing.lg : insets.top + spacing.md,
          paddingBottom: insets.bottom + spacing.xxl,
        },
      ]}>
      <View style={styles.inner}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: spacing.md, alignItems: 'center' },
  inner: { width: '100%', maxWidth: contentMaxWidth, gap: spacing.xl },
});
