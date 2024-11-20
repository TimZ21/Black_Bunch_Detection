import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'; // For gallery icon

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  // Request camera permissions on mount
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Take a photo
  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  // Pick an image from gallery
  const pickImageFromGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.canceled) {
        setPhotoUri(result.uri);
      }
    } else {
      alert('Permission to access gallery is required!');
    }
  };

  // Conditional rendering for camera
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
        <View style={styles.cameraOverlay}>
          {/* Real-time camera feed */}
          {photoUri && <Image source={{ uri: photoUri }} style={styles.previewImage} />}

          {/* Switch camera button */}
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() =>
              setCameraType(cameraType === CameraType.back ? CameraType.front : CameraType.back)
            }>
            <Ionicons name="camera-reverse" size={30} color="white" />
          </TouchableOpacity>

          {/* Take photo button */}
          <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
            <Text style={styles.captureButtonText}>Capture</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      {/* Gallery Icon to pick image */}
      <TouchableOpacity style={styles.galleryButton} onPress={pickImageFromGallery}>
        <Ionicons name="image" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  camera: {
    width: '100%',
    height: '100%',
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
  captureButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  captureButtonText: {
    fontSize: 18,
    color: '#000',
  },
  galleryButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#1B928F',
    borderRadius: 50,
    padding: 15,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
});
