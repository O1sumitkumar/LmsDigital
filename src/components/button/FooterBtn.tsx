import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet, View} from 'react-native';
import PrimaryBtn from '@button/PrimaryBtn';
import React from 'react';

export interface FooterBtnProps {
  onContainedBtnPress: () => void;
  onOutlinedBtnPress?: () => void;
  containedBtnText?: string;
  outlinedBtnText?: string;
  containedBtnLoading?: boolean;
  outlinedBtnLoading?: boolean;
  containedBtnDisabled?: boolean;
  outlinedBtnDisabled?: boolean;
  containedBtnStyle?: object;
  outlinedBtnStyle?: object;
}

const FooterBtn: React.FC<FooterBtnProps> = ({
  onContainedBtnPress,
  onOutlinedBtnPress,
  containedBtnText = 'Save',
  outlinedBtnText = 'Cancel',
  containedBtnLoading = false,
  outlinedBtnLoading = false,
  containedBtnDisabled = false,
  outlinedBtnDisabled = false,
}) => {
  return (
    <View style={styles.container}>
      <PrimaryBtn
        mode="outlined"
        loading={outlinedBtnLoading}
        disabled={outlinedBtnDisabled}
        onPress={onOutlinedBtnPress}
        additionalBtnStyle={styles.btn}>
        {outlinedBtnText}
      </PrimaryBtn>
      <PrimaryBtn
        loading={containedBtnLoading}
        disabled={containedBtnDisabled}
        onPress={onContainedBtnPress}
        additionalBtnStyle={styles.btn}>
        {containedBtnText}
      </PrimaryBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: RFValue(8),
  },
  btn: {
    flex: 1,
  },
});

export default FooterBtn;
