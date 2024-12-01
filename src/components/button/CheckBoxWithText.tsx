import CheckBox from '@components/checkBox/CheckBox';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

interface CheckBoxWithTextProps {
  subTitle: string;
  onPress: () => void;
  rightBtnText?: string;
  subtitleBtnText?: string;
  subtitleBtnOnPress?: () => void;
}

const CheckBoxWithText: React.FC<CheckBoxWithTextProps> = ({
  subTitle,
  onPress,
  rightBtnText,
  subtitleBtnText,
  subtitleBtnOnPress,
}) => {
  return (
    <View style={styles.termsCont}>
      <View style={styles.termTextCont}>
        <CheckBox />
        <Text variant="titleMedium">
          {subTitle} &nbsp;
          {subtitleBtnText && (
            <Text
              onPress={subtitleBtnOnPress}
              variant="titleMedium"
              style={styles.forgotText}>
              {subtitleBtnText}
            </Text>
          )}
        </Text>
      </View>
      {rightBtnText && (
        <View style={styles.termTextCont}>
          <Text
            onPress={onPress}
            variant="titleMedium"
            style={styles.forgotText}>
            {rightBtnText}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  termsCont: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  termTextCont: {flexDirection: 'row', alignItems: 'center'},
  forgotText: {
    // fontSize: 14,
    color: '#FFA05C',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default React.memo(CheckBoxWithText);
