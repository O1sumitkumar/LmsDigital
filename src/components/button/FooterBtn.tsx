import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet, View} from 'react-native';
import PrimaryBtn from '@button/PrimaryBtn';
import React from 'react';

interface FooterBtnProps {
  onContainedBtnPress?: () => void;
  onOutlinedBtnPress?: () => void;
  containedBtnText?: string;
  outlinedBtnText?: string;
  containedBtnLoading?: boolean;
  outlinedBtnLoading?: boolean;
  containedBtnDisabled?: boolean;
  outlinedBtnDisabled?: boolean;
}

const FooterBtn: React.FC<FooterBtnProps> = () => {
  return (
    <View style={styles.container}>
      <PrimaryBtn mode="outlined" additionalBtnStyle={styles.btn}>
        Cancel
      </PrimaryBtn>
      <PrimaryBtn additionalBtnStyle={styles.btn}>Save</PrimaryBtn>
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
