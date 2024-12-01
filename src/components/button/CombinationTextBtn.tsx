import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

interface CombinationTextBtnProps {
  onPress: () => void;
  subTitle: string;
  btnText: string;
}

const CombinationTextBtn: React.FC<CombinationTextBtnProps> = ({
  onPress,
  subTitle = 'Don’t have an account ?',
  btnText,
}) => {
  return (
    <View style={styles.btnCont}>
      <Text variant="titleMedium" style={styles.headingSubTitle}>
        {subTitle} &nbsp;
        <Text onPress={onPress} variant="titleMedium" style={styles.forgotText}>
          {btnText}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  termTextCont: {flexDirection: 'row', alignItems: 'center'},
  forgotText: {
    // fontSize: 14,
    color: '#FFA05C',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  btnCont: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  headingSubTitle: {fontWeight: '500'},
});

export default React.memo(CombinationTextBtn);
