import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather'; // For the plus icon

const Gallery = () => {
  const handleAddPhoto = () => {
    // Handle the "Add Photo" functionality here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dark Status Bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Corner Shapes */}
      <View style={styles.topLeftCorner} />
      <View style={styles.bottomRightCorner} />

      {/* Header with Left-Aligned Title */}
      <View style={styles.header}>
        <Text style={styles.title}>Album</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.emptyText}>No images processed yet.</Text>
      </View>

      {/* Floating Plus Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={handleAddPhoto}>
        <Icon name="plus" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3FDFB', // Light background color
  },
  topLeftCorner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 120,
    height: 120,
    backgroundColor: '#1B928F',
    opacity: 0.2,
    borderBottomRightRadius: 60,
  },
  bottomRightCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 120,
    height: 120,
    backgroundColor: '#1B928F',
    opacity: 0.2,
    borderTopLeftRadius: 60,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-start', // Align title to the left
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B928F', // Keep title color
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333333', // Darker text for contrast
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1B928F',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Add shadow to make it pop
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default Gallery;