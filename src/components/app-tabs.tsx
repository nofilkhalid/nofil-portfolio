import { NativeTabs } from 'expo-router/native-tabs';

import { useTheme } from '@/constants/theme';

export default function AppTabs() {
  const c = useTheme();

  return (
    <NativeTabs
      tintColor={c.accent}
      backgroundColor={c.card}
      indicatorColor={c.accentSoft}
      rippleColor={c.pressed}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'person', selected: 'person.fill' }} md="person" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="resume">
        <NativeTabs.Trigger.Label>Resume</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'doc.text', selected: 'doc.text.fill' }} md="description" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
