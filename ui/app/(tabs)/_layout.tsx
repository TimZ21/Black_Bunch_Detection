import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1B928F', // Teal accent color for active tab
        tabBarInactiveTintColor: '#999999', // Light gray for inactive tabs
        tabBarStyle: {
          backgroundColor: '#333333', // Dark gray background for the tab bar
          borderTopWidth: 1,
          borderTopColor: '#4D4D4D', // Border for separation
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="GetStartedPage"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Album"
        options={{
          title: 'Gallery',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? '' : 'outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Camera"
        options={{
          title: 'Real Time',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? '' : 'outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
