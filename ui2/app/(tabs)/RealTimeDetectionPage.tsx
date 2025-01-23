import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, ImageBackground } from 'react-native';

// Import your background image
const backgroundImage = require('../../assets/images/background.jpg'); // Adjust the path as necessary

const RealTimeDetectionPage = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [duration, setDuration] = useState(0);
  const [liveIndicatorOpacity] = useState(new Animated.Value(1));

  // Timer effect for duration
  useEffect(() => {
    let timer;
    if (isDetecting) {
      timer = setInterval(() => {
        setDuration(prevDuration => prevDuration + 1);
      }, 1000);
    } else {
      setDuration(0); // Reset duration when stopped
    }
    return () => clearInterval(timer);
  }, [isDetecting]);

  // Blinking effect for the live indicator
  useEffect(() => {
    if (isDetecting) {
      const blink = () => {
        Animated.sequence([
          Animated.timing(liveIndicatorOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(liveIndicatorOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start(() => blink());
      };
      blink();
    }
  }, [isDetecting]);

  const handleToggleDetection = () => {
    setIsDetecting(prev => !prev);
  };

  // Format duration as MM:SS
  const formatDuration = (duration) => {
    const minutes = String(Math.floor(duration / 60)).padStart(2, '0');
    const seconds = String(duration % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      {isDetecting && (
        <Animated.View style={[styles.liveIndicator, { opacity: liveIndicatorOpacity }]}>
          <Text style={styles.liveText}>LIVE ●</Text>
        </Animated.View>
      )}
      <View style={styles.overlay}>
        <TouchableOpacity
          style={[styles.button, isDetecting ? styles.buttonStop : styles.buttonStart]}
          onPress={handleToggleDetection}
        >
          <Text style={[styles.buttonText, isDetecting ? styles.textStop : styles.textStart]}>
            {isDetecting ? 'STOP' : 'START'}
          </Text>
        </TouchableOpacity>
      </View>
      {isDetecting && (
        <Text style={styles.duration}>{formatDuration(duration)}</Text>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Make the overlay transparent
    padding: 30,
    borderRadius: 10,
    position: 'absolute', // Position it absolutely
    bottom: 30, // Adjust this value to position it just above the timer
    left: 0,
    right: 0,
  },
  liveIndicator: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
    zIndex: 10, // Bring the live indicator to the front
  },
  liveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration: {
    color: 'yellow', // Change timer text to yellow
    fontSize: 24,
    position: 'absolute',
    bottom: 20, // Position the timer at the bottom of the screen
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#FFFFFF', // Set background color to white
  },
  buttonStart: {
    backgroundColor: '#1B928F', // Inactive button color (Start)
  },
  buttonStop : {
    backgroundColor: '#FFFFFF', // White color for Stop button
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStart: {
    color: '#fff', // White text for Start button
  },
  textStop: {
    color: '#1B928F', // Text color for Stop button
  },
});

export default RealTimeDetectionPage;