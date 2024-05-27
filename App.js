import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.bold}>Ama</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#99b2cc',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
});