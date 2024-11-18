import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraPage = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  if (!device) {
    return <Text style={styles.loadingText}>Loading camera...</Text>;
  }

  if (!hasPermission) {
    return <Text style={styles.permissionText}>Camera permission not granted</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loadingText: {
    flex: 1,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {
    flex: 1,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraPage;
