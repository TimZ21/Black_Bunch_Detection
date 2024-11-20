import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexPage from './index'; // Import your cover page
import CameraPage from './camerapage'; // Import your camera page

const Stack = createStackNavigator();

const AppLayout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexPage">
        {/* Cover Page */}
        <Stack.Screen
          name="IndexPage"
          component={IndexPage}
          options={{ headerShown: false }} // Hide header on the cover page
        />
        {/* Camera Page */}
        <Stack.Screen
          name="CameraPage"
          component={CameraPage}
          options={{ headerShown: true, title: 'Camera' }} // Show header for the camera page
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppLayout;
