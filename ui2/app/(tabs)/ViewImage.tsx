import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer'; // Image zoom viewer

const ViewImage: React.FC = () => {
  const images = [
    {
      url: 'https://placeholder.pics/svg/363x498', // Image URL to zoom
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <Header />
      <ImageView images={images} />
    </View>
  );
};

const Header: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.title}>View Image</Text>
    <TouchableOpacity style={styles.closeButton}>
      <Image
        source={{ uri: 'https://placeholder.pics/svg/30x30' }} // Close icon
        style={styles.closeIcon}
      />
    </TouchableOpacity>
  </View>
);

const ImageView: React.FC<{ images: { url: string }[] }> = ({ images }) => {
  return (
    <View style={styles.imageContainer}>
      <ImageViewer
        imageUrls={images} // Provide the images array
        enableImageZoom={true} // Enable zoom functionality
        enableSwipeDown={true} // Enable swipe down to close the image view
        onSwipeDown={() => console.log('swiped down')}
        saveToLocalByLongPress={false} // Disable saving images on long press
        renderIndicator={() => null} // Hide default indicator
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Dark theme
    paddingTop: StatusBar.currentHeight || 0, // To account for the status bar height
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: '#FFFFFF', // White title
    letterSpacing: 1,
  },
  closeButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slight dark background for button
    borderRadius: 18, // Round button
    borderWidth: 2,
    borderColor: '#1B928F', // Subtle blue border
    opacity: 0.8,
    elevation: 5,
  },
  closeIcon: {
    width: '60%',
    height: '60%',
    tintColor: '#1B928F', // Blue color for close icon
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%', // Slight margin top
    paddingHorizontal: 15, // Horizontal padding for smaller screens
    borderRadius: 15, // Rounded corners for the image container
    overflow: 'hidden', // Ensures that the image stays inside the container
  },
});

export default ViewImage;
