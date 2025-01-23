import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ViewImage = ({ photoUri, onClose }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Icon name="close" size={30} color="#1B928F" />
      </TouchableOpacity>

      {/* Display the snapped image */}
      <Image source={{ uri: photoUri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3FDFB',
    position: 'relative',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for button
    borderRadius: 18, // Round button
    borderWidth: 2,
    borderColor: '#1B928F', // Subtle blue border
    opacity: 0.9,
    elevation: 5,
  },
  closeIcon: {
    width: '60%',
    height: '60%',
    tintColor: '#1B928F', // Blue color for close icon
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ViewImage;