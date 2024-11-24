import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface AvoidKeyBoardProps {
  children: React.ReactNode;
}

const AvoidKeyBoard: React.FC<AvoidKeyBoardProps> = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>{children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default AvoidKeyBoard;
