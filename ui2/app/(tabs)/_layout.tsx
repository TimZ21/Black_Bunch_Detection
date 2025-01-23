import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF', // White for active tab
        tabBarInactiveTintColor: '#CCCCCC', // Light gray for inactive tabs
        tabBarStyle: {
          backgroundColor: '#1B928F', // Teal background for the tab bar
          borderTopWidth: 1,
          borderTopColor: '#1A7B7B', // Slightly darker teal for border
          paddingBottom: 5, // Increased padding for bottom
          paddingTop: 5, // Increased padding for top
          height: 60, // Set a fixed height for the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Get Started',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Gallery"
        options={{
          title: 'Gallery',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'images' : 'images-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="RealTimeDetectionPage"
        options={{
          title: 'Real Time',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'videocam' : 'videocam-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ImagePicker"
        options={{
          title: 'Image Picker',
          tabBarButton: () => null, // Hide this tab if you don't want it on the tab bar
        }}
      />
      <Tabs.Screen
        name="BBDetected"
        options={{
          title: 'BBDetected',
          tabBarButton: () => null, // Hide this tab if you don't want it on the tab bar
        }}
      />
      <Tabs.Screen
        name="ReviewSnappedImage"
        options={{
          title: 'Review Image',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="UploadingLayover"
        options={{
          title: 'Uploading Image',
          tabBarButton: () => null, // Hide this tab if you don't want it on the tab bar
        }}
      />
      <Tabs.Screen
        name="ViewImage"
        options={{
          title: 'View Image',
          tabBarButton: () => null, // Hide this tab if you don't want it on the tab bar
        }}
      />
    </Tabs>
  );
}