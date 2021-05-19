import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ContactPage from './src/pages/Contact';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ContactPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
