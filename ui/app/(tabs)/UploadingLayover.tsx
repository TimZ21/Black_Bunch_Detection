import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UploadingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Ensure the status bar shows on top */}
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <AlertModal />
    </SafeAreaView>
  );
};

const AlertModal = () => {
  return (
    <View style={styles.modalBackground}>
      <View style={styles.alert}>
        <View style={styles.content}>
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: 'https://placeholder.pics/svg/52x52' }}
              style={styles.photo}
            />
          </View>
          <Text style={styles.description}>Uploading...</Text>

          {/* Loading Indicator */}
          <ActivityIndicator size="large" color="#1B928F" style={styles.loadingIndicator} />
        </View>

        {/* Cancel Button */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: '#333333', // Dark modal background
    borderRadius: 14,
    padding: 16,
    width: 270,
    alignItems: 'center',
  },
  alert: {
    alignItems: 'center',
    padding: 16,
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photoContainer: {
    marginBottom: 10,
  },
  photo: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CCCCCC', // Light text color
    marginBottom: 10,
  },
  loadingIndicator: {
    marginVertical: 15,
  },
  actionButton: {
    backgroundColor: '#1B928F', // Accent color
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    color: '#FFFFFF', // White text for contrast
  },
});

export default UploadingPage;
