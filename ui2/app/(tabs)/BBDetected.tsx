import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Alert } from 'react-native';

const BBDetected: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <Header />
      <DetectedImage />
      <DetectionDetails />
      <ActionButtons />
    </View>
  );
};

const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.title}>Detection Results</Text>
  </View>
);

const DetectedImage: React.FC = () => (
  <View style={styles.detectedImageContainer}>
    <Image
      source={{ uri: 'https://placeholder.pics/svg/600x600' }} // Larger image
      style={styles.detectedImage}
    />
  </View>
);

const DetectionDetails: React.FC = () => (
  <View style={styles.detailsContainer}>
    <Text style={styles.messageTitle}>Detected</Text>
    <Text style={styles.messageSubtitle}>Detection Accuracy: <Text style={styles.greenText}>92%</Text></Text>
    <Text style={styles.messageSubtitle}>Bunches Detected: <Text style={styles.greenText}>3</Text></Text>
  </View>
);

const ActionButtons: React.FC = () => {
  const handleSaveImage = () => {
    // Show alert when the image is saved
    Alert.alert("Image saved!", "Your image has been successfully saved.", [{ text: "OK" }]);
  };

  return (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity style={styles.button} onPress={handleSaveImage}>
        <Text style={styles.buttonText}>Save Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3FDFB', // Keep the background color
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight || 0,
  },
  headerContainer: {
    backgroundColor: '#1B928F',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  detectedImageContainer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  detectedImage: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1B928F',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  detailsContainer: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  messageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1A1A1A', // Dark color for better contrast
    textAlign: 'center',
  },
  messageSubtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1A1A1A', // Default color for subtitle
    textAlign: 'center',
    marginTop: 10,
  },
  greenText: {
    color: '#4CAF50', // Green color for accuracy and bunches detected
    fontWeight: '700',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#1B928F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default BBDetected;