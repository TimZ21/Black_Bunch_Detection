import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, StatusBar } from 'react-native';

const ImagePicker: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const handleDeselectImage = () => {
    setSelectedImage(null); // Deselect the image
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="000000" />
      <TopNavigation />
      <SearchField />
      <PhotoGrid
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        handleDeselectImage={handleDeselectImage}
      />
      <SelectionFooter />
    </View>
  );
};

const TopNavigation: React.FC = () => (
  <View style={styles.topNavigation}>
    <Text style={styles.selectText}>Select up to 1 item.</Text>
    <View style={styles.navigationActions}>
      <TouchableOpacity>
        <Text style={styles.actionText}>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.segmentedPicker}>
        <TouchableOpacity style={styles.pickerOptionActive}>
          <Text style={styles.pickerTextActive}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pickerOption}>
          <Text style={styles.pickerText}>Albums</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.actionText}>Upload</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SearchField: React.FC = () => (
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="Photos, People, Places..."
      placeholderTextColor="#A0A0A0" // Lighter placeholder color
    />
  </View>
);

const PhotoGrid: React.FC<{
  selectedImage: any;
  setSelectedImage: React.Dispatch<React.SetStateAction<any | null>>;
  handleDeselectImage: () => void;
}> = ({ selectedImage, setSelectedImage, handleDeselectImage }) => (
  <ScrollView contentContainerStyle={styles.photoGrid}>
    {/* Sample photos, replace with actual dynamic content */}
    {[...Array(12)].map((_, index) => {
      const imageUri = `https://placeholder.pics/svg/137x137/${index}`; // Replace with real images
      const isSelected = selectedImage && selectedImage.uri === imageUri;

      return (
        <View style={styles.photoBox} key={index}>
          <Image
            source={{ uri: imageUri }}
            style={styles.photo}
          />
          {/* Only show the checkmark if this image is selected */}
          {isSelected && (
            <View style={styles.tickMark}>
              <Text style={styles.tickText}>✓</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.selectOverlay}
            onPress={() => {
              if (selectedImage && isSelected) {
                handleDeselectImage(); // Deselect the image if it's already selected
              } else {
                setSelectedImage({ uri: imageUri }); // Select this image
              }
            }}
            disabled={!!selectedImage && !isSelected} // Disable further selection if an image is already selected
          />
        </View>
      );
    })}
  </ScrollView>
);

const SelectionFooter: React.FC = () => (
  <View style={styles.selectionFooter}>
    <TouchableOpacity>
      <Text style={styles.footerText}>Show Selected ({1})</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Light background
    paddingTop: StatusBar.currentHeight || 0, // Ensures content starts below the StatusBar
  },
  topNavigation: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#F8F8F8', // Light background for navigation
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD', // Light border
  },
  selectText: {
    textAlign: 'center',
    fontSize: 13.8,
    color: '#333333', // Darker text for contrast
  },
  navigationActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop : 10,
  },
  actionText: {
    color: '#1B928F', // Blue for actions
    fontSize: 18.05,
  },
  segmentedPicker: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0', // Subtle background for picker
    borderRadius: 8.49,
    overflow: 'hidden',
  },
  pickerOption: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: 'transparent',
  },
  pickerOptionActive: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#1B928F', // Active picker option in blue
    borderRadius: 7.43,
  },
  pickerTextActive: {
    fontWeight: '600',
    color: '#FFFFFF', // White text for active option
  },
  pickerText: {
    fontWeight: '500',
    color: '#333333', // Dark text for inactive option
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#F8F8F8', // Light background for search field
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD', // Light border for search
  },
  searchInput: {
    backgroundColor: '#E0E0E0', // Light gray background for input
    borderRadius: 10.62,
    paddingVertical: 7,
    paddingHorizontal: 8,
    color: '#333333', // Dark text inside input
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 2,
  },
  photoBox: {
    width: '32%',
    marginBottom: 2,
    backgroundColor: '#FFFFFF', // White background for photo boxes
    borderRadius: 8,
    overflow: 'hidden', // To ensure rounded corners
    position: 'relative', // To position the checkmark overlay correctly
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },
  photo: {
    width: '100%',
    height: 137,
    borderRadius: 8, // Rounded corners for photos
  },
  tickMark: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#1B928F', // Checkmark background color to match theme
    borderRadius: 12,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Make sure it appears on top of the image
  },
  tickText: {
    fontSize: 18,
    color: '#FFFFFF', // White checkmark color
    fontWeight: 'bold',
  },
  selectOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  selectionFooter: {
    padding: 16,
    backgroundColor: '#F8F8F8', // Light background for footer
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD', // Light border for footer
    alignItems: 'center',
  },
  footerText: {
    color: '#1B928F', // Blue for footer action
    fontSize: 18.05,
  },
});

export default ImagePicker;