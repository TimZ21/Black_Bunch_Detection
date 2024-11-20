import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

const index: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <DecorativeHeader />
      <IconImage />
      <TextContent />
      <GetStartedButton />
      <BottomDecor />
    </View>
  );
};

const DecorativeHeader: React.FC = () => (
  <View style={styles.header}>
    <Image
      source={{ uri: 'https://placeholder.pics/svg/372x35' }}
      style={styles.topImage}
    />
  </View>
);

const IconImage: React.FC = () => (
  <View style={styles.iconContainer}>
    <Image
      source={{ uri: 'https://placeholder.pics/svg/300x308' }}
      style={styles.icon}
    />
  </View>
);

const TextContent: React.FC = () => (
  <View style={styles.textContainer}>
    <Text style={styles.title}>Real Time Black Bunches Detection</Text>
    <Text style={styles.subtitle}>Make informed harvest decisions anytime, anywhere</Text>
  </View>
);

const GetStartedButton: React.FC = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Get Started</Text>
  </TouchableOpacity>
);

const BottomDecor: React.FC = () => (
  <View style={styles.bottomDecor}>
    <Image
      source={{ uri: 'https://placeholder.pics/svg/284x117' }}
      style={styles.bottomImage}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: '#1A1A1A', // Dark background for the app
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: 35,
  },
  iconContainer: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    overflow: 'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    width: 280,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B928F', // Accent button color
    borderRadius: 30,
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  bottomDecor: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomImage: {
    width: 284,
    height: 117,
    borderRadius: 15,
  },
});

export default index;
