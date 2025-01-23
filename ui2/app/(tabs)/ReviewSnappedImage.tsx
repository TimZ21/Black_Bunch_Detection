import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure to install this package

const ReviewSnappedImage = ({ photoUri, onClose, onResize, onUpload }) => {

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Review Image</Text>

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Icon name="close" size={40} color="#1B928F" />
      </TouchableOpacity>

      {/* Display the snapped image */}
      <Image source={{ uri: photoUri }} style={styles.image} />

      <View style={styles.iconContainer}>
        {/* Resize Icon */}
        <TouchableOpacity onPress={onResize} style={styles.iconButton}>
          <Icon name="crop" size={30} color="#1B928F" />
          <Text style={styles.iconLabel}>Edit</Text>
        </TouchableOpacity>

        {/* Upload Icon */}
        <TouchableOpacity onPress={onUpload} style={styles.iconButton}>
          <Icon name="cloud-upload" size={30} color="#1B928F" />
          <Text style={styles.iconLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 5,
    color: '#1B928F',
    fontSize: 16,
  },
});

export default ReviewSnappedImage;