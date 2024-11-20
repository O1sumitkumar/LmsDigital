import React, {useRef} from 'react';
import {Pressable, Text, StyleSheet, Animated} from 'react-native';

const AnimatedButton = () => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {toValue: 0.9, useNativeDriver: true}).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {toValue: 1, useNativeDriver: true}).start();
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.button, {transform: [{scale}]}]}>
        <Text style={styles.text}>Click Me</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AnimatedButton;
