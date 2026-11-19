import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import { ActionButton, Avatar, Card, ContactRow, SectionTitle, textStyles } from '@/components/portfolio';
import { Screen } from '@/components/screen';
import { fontSize, iconSize, radius, spacing, useTheme } from '@/constants/theme';
import { highlights, profile, stats } from '@/data/profile';

export default function HomeScreen() {
  const c = useTheme();

  return (
    <Screen>
      {/* Hero */}
      <View style={styles.hero}>
        <Avatar size={132} />
        <View style={styles.heroText}>
          <Text style={[styles.name, { color: c.foreground }]} accessibilityRole="header">
            {profile.name}
          </Text>
          <Text style={[styles.headline, { color: c.accent }]}>{profile.headline}</Text>
          <View style={styles.metaRow}>
            <SymbolView
              name={{ ios: 'mappin.and.ellipse', android: 'location_on', web: 'location_on' }}
              size={iconSize.sm}
              tintColor={c.mutedForeground}
            />
            <Text style={[textStyles.caption, { color: c.mutedForeground }]}>{profile.location}</Text>
          </View>
          <View style={[styles.pill, { backgroundColor: c.accentSoft }]}>
            <View style={[styles.pillDot, { backgroundColor: c.accent }]} />
            <Text style={[styles.pillText, { color: c.onAccentSoft }]}>{profile.availability}</Text>
          </View>
        </View>
        <Text style={[styles.intro, { color: c.mutedForeground }]}>{profile.intro}</Text>
        <View style={styles.actions}>
          <ActionButton
            variant="primary"
            label="View full resume"
            icon={{ ios: 'doc.text', android: 'description', web: 'description' }}
            onPress={() => router.navigate('/resume')}
          />
          <ContactRow />
        </View>
      </View>

      {/* Stats */}
      <View>
        <SectionTitle>At a glance</SectionTitle>
        <View style={styles.statsGrid}>
          {stats.map((s) => (
            <Card key={s.label} style={styles.statCard}>
              <Text style={[styles.statValue, { color: c.foreground }]}>{s.value}</Text>
              <Text style={[textStyles.caption, { color: c.mutedForeground }]}>{s.label}</Text>
            </Card>
          ))}
        </View>
      </View>

      {/* Highlights */}
      <View>
        <SectionTitle>Key achievements</SectionTitle>
        <View style={styles.list}>
          {highlights.map((h) => (
            <Card key={h.title} style={styles.highlight}>
              <View style={[styles.iconBadge, { backgroundColor: c.accentSoft }]}>
                <SymbolView
                  name={{ ios: 'checkmark.seal', android: 'verified', web: 'verified' }}
                  size={iconSize.md}
                  tintColor={c.accent}
                />
              </View>
              <View style={styles.highlightText}>
                <Text style={[styles.highlightTitle, { color: c.foreground }]}>{h.title}</Text>
                <Text style={[textStyles.body, { color: c.mutedForeground }]}>{h.detail}</Text>
              </View>
            </Card>
          ))}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', gap: spacing.md },
  heroText: { alignItems: 'center', gap: spacing.sm },
  name: { fontSize: fontSize.h1, fontWeight: '800', letterSpacing: -0.5, textAlign: 'center' },
  headline: { fontSize: fontSize.lead, fontWeight: '600', textAlign: 'center' },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.pill,
    marginTop: spacing.xs,
  },
  pillDot: { width: 8, height: 8, borderRadius: 4 },
  pillText: { fontSize: fontSize.caption, fontWeight: '600' },
  intro: { fontSize: fontSize.lead, lineHeight: 26, textAlign: 'center', maxWidth: 520 },
  actions: { width: '100%', maxWidth: 420, gap: spacing.sm + 4 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm + 4 },
  statCard: { flexGrow: 1, flexBasis: '45%', gap: spacing.xs },
  statValue: { fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
  list: { gap: spacing.sm + 4 },
  highlight: { flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start' },
  iconBadge: { width: 40, height: 40, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  highlightText: { flex: 1, gap: spacing.xs },
  highlightTitle: { fontSize: fontSize.body, fontWeight: '700' },
});
