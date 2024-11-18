import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const localImage = require('../assets/images/cover1remove.png'); // Ensure the image path is correct

const IndexPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={localImage} style={styles.image} />
      </View>
      <Text style={styles.title}>Real-Time Black Bunches Detection</Text>
      <Text style={styles.subtitle}>
        Make informed harvest decisions{`\n`}anytime, anywhere
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CameraPage')} // Navigate to CameraPage
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: 300,
    height: 308,
    borderRadius: 150,
    backgroundColor: '#D9FDD3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 290,
    borderRadius: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#B2FF59',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
});

export default IndexPage;
