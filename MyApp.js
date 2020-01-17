import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Likes from './components/Likes'
import Todo from './src/components/Todo'
// import Flex from './components/Flex'

export default function App() {
  return (
    <View style={styles.container}>
      <Todo />
      {/* <Text>Hello World</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6D8D3',
    alignItems: "center",
    justifyContent: "center",
  },
});