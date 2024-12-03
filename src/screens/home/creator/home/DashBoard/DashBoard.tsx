import PromptModal from '@modal/PromptModal';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const DashBoard = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red', fontSize: 50}}>Creator DashBoard</Text>
      <PromptModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashBoard;
