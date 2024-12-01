import {RFValue} from 'react-native-responsive-fontsize';
import {Button, ButtonProps} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import * as React from 'react';

interface PrimaryBtnProps extends ButtonProps {
  additionalBtnStyle?: {};
  additionalLabelStyle?: {};
}

const PrimaryBtn = ({
  mode = 'contained',
  additionalBtnStyle,
  additionalLabelStyle,
  children,
  ...props
}: PrimaryBtnProps) => {
  return (
    <Button
      style={[styles.button, additionalBtnStyle]}
      labelStyle={[styles.label, additionalLabelStyle]}
      mode={mode}
      {...props}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: RFValue(6),
  },
  label: {
    fontSize: RFValue(14),
    lineHeight: RFValue(20),
    fontWeight: '500',
  },
});

export default React.memo(PrimaryBtn);
