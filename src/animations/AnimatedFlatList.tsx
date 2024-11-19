import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import Animated, {Layout, FadeIn} from 'react-native-reanimated';

const AnimatedFlatList = () => {
  const data = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <Animated.View
          layout={Layout.springify()}
          entering={FadeIn.duration(300)}>
          <Text style={styles.item}>{item}</Text>
        </Animated.View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
    fontSize: 18,
    borderRadius: 8,
  },
});

export default AnimatedFlatList;
