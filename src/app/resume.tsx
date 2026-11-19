import { StyleSheet, Text, View } from 'react-native';

import { Avatar, Bullet, Card, Chip, ContactRow, SectionTitle, textStyles } from '@/components/portfolio';
import { Screen } from '@/components/screen';
import { fontSize, spacing, useTheme } from '@/constants/theme';
import { certifications, education, experience, languages, profile, skills } from '@/data/profile';

export default function ResumeScreen() {
  const c = useTheme();

  return (
    <Screen>
      {/* Header */}
      <View style={styles.header}>
        <Avatar size={72} />
        <View style={styles.headerText}>
          <Text style={[styles.name, { color: c.foreground }]} accessibilityRole="header">
            {profile.name}
          </Text>
          <Text style={[styles.headline, { color: c.accent }]}>{profile.headline}</Text>
          <Text style={[textStyles.caption, { color: c.mutedForeground }]}>
            {profile.location} · {profile.email}
          </Text>
        </View>
      </View>
      <ContactRow />

      <View>
        <SectionTitle>Profile</SectionTitle>
        <Card>
          <Text style={[textStyles.body, { color: c.foreground }]}>{profile.summary}</Text>
        </Card>
      </View>

      <View>
        <SectionTitle>Key skills</SectionTitle>
        <View style={styles.chips}>
          {skills.map((s) => (
            <Chip key={s} label={s} />
          ))}
        </View>
      </View>

      <View>
        <SectionTitle>Experience</SectionTitle>
        {experience.map((role) => (
          <Card key={role.company + role.title} style={styles.block}>
            <EntryHeader title={role.title} subtitle={role.company} period={role.period} />
            <View style={styles.bullets}>
              {role.points.map((p) => (
                <Bullet key={p}>{p}</Bullet>
              ))}
            </View>

            <Text style={[styles.subLabel, { color: c.mutedForeground }]}>Selected client products</Text>
            <View style={styles.projects}>
              {role.projects.map((proj) => (
                <View key={proj.name} style={[styles.project, { borderLeftColor: c.accent }]}>
                  <EntryHeader title={proj.name} subtitle={proj.type} period={proj.period} />
                  <View style={styles.bullets}>
                    {proj.points.map((p) => (
                      <Bullet key={p}>{p}</Bullet>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </Card>
        ))}
      </View>

      <View>
        <SectionTitle>Education</SectionTitle>
        <View style={styles.stack}>
          {education.map((e) => (
            <Card key={e.degree} style={styles.block}>
              <EntryHeader title={e.degree} subtitle={e.school} period={e.period} />
              {e.notes.length > 0 && (
                <View style={styles.bullets}>
                  {e.notes.map((n) => (
                    <Bullet key={n}>{n}</Bullet>
                  ))}
                </View>
              )}
            </Card>
          ))}
        </View>
      </View>

      <View>
        <SectionTitle>Certifications</SectionTitle>
        <Card style={styles.bullets}>
          {certifications.map((x) => (
            <Bullet key={x}>{x}</Bullet>
          ))}
        </Card>
      </View>

      <View>
        <SectionTitle>Languages</SectionTitle>
        <Card style={styles.bullets}>
          {languages.map((x) => (
            <Bullet key={x}>{x}</Bullet>
          ))}
        </Card>
      </View>
    </Screen>
  );
}

function EntryHeader({ title, subtitle, period }: { title: string; subtitle: string; period: string }) {
  const c = useTheme();
  return (
    <View style={styles.entryHeader}>
      <View style={styles.entryTitles}>
        <Text style={[styles.entryTitle, { color: c.foreground }]}>{title}</Text>
        <Text style={[styles.entrySubtitle, { color: c.mutedForeground }]}>{subtitle}</Text>
      </View>
      <Text style={[styles.period, { color: c.mutedForeground }]}>{period}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  headerText: { flex: 1, gap: 2 },
  name: { fontSize: fontSize.h2, fontWeight: '800', letterSpacing: -0.3 },
  headline: { fontSize: fontSize.body, fontWeight: '600' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  block: { gap: spacing.md },
  stack: { gap: spacing.sm + 4 },
  bullets: { gap: spacing.sm },
  subLabel: {
    fontSize: fontSize.caption,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: spacing.sm,
  },
  projects: { gap: spacing.lg },
  project: { borderLeftWidth: 3, paddingLeft: spacing.md, gap: spacing.sm },
  entryHeader: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: spacing.sm },
  entryTitles: { flexShrink: 1, gap: 2 },
  entryTitle: { fontSize: fontSize.lead, fontWeight: '700' },
  entrySubtitle: { fontSize: 15, fontWeight: '500' },
  period: { fontSize: fontSize.caption, fontWeight: '600', paddingTop: 3 },
});
