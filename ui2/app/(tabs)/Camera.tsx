import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import backgroundImage from '../../assets/images/background.jpg'; // Adjust the path as necessary

const Camera = ({ photoUri, onCapture }) => {
  return (
      

    <ImageBackground
      source={backgroundImage} // Use the imported local image
      style={styles.container}
      resizeMode="cover" // Adjusts the image to cover the entire background
    >
      {/* Camera View Placeholder */}
      <View style={styles.camera}>
        {/* Preview of the taken photo */}
        {photoUri && <Image source={{ uri: photoUri }} style={styles.previewImage} />}
      </View>

      <View style={styles.cameraOverlay}>
        {/* Switch camera button (optional) */}
        <TouchableOpacity style={styles.switchButton}>
          <Ionicons name="camera-reverse" size={30} color="white" />
        </TouchableOpacity>

        {/* Capture photo button with outer ring */}
        <View style={styles.outerRing}>
          <TouchableOpacity style={styles.captureButton} onPress={onCapture}>
            <View style={styles.captureButtonInner}>
              <Text style={styles.captureButtonText}></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Make sure the camera view is transparent
  },
  cameraOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  switchButton: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  outerRing: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    borderRadius: 50, // Half of the width/height for a perfect circle
    borderWidth: 5, // Width of the ring
    borderColor: 'rgba(255, 255, 255, 0.8)', // Transparent white color for the ring
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5, // Space from the bottom
  },
  captureButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF', // Solid white color
  },
  captureButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  captureButtonInner: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Camera;