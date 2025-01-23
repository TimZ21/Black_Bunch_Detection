import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UploadingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Ensure the status bar shows on top */}
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />

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
    backgroundColor: '#E3FDFB', // Light background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: '#FFFFFF', // White modal background
    borderRadius: 14,
    padding: 12, // Decreased padding
    width: 250, // Decreased width
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
  },
  alert: {
    alignItems: 'center',
    padding: 8, // Decreased padding
  },
  content: {
    alignItems: 'center',
    marginBottom: 15, // Adjusted margin
  },
  photoContainer: {
    marginBottom: 8, // Adjusted margin
  },
  photo: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  description: {
    fontSize: 18, // Slightly reduced font size
    fontWeight: 'bold',
    color: '#333333', // Dark text color for contrast
    marginBottom: 8, // Adjusted margin
  },
  loadingIndicator: {
    marginVertical: 10, // Adjusted vertical margin
  },
  actionButton: {
    backgroundColor: '#1B928F', // Accent color
    borderRadius: 8,
    paddingVertical: 10, // Adjusted padding
    paddingHorizontal: 20, // Adjusted padding
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  actionText: {
    fontSize: 16,
    color: '#FFFFFF', // White text for contrast
    fontWeight: '600', // Slightly bolder text
  },
});

export default UploadingPage;