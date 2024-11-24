import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, ButtonProps} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

interface PrimaryBtnProps extends ButtonProps {
  text?: string;
  additionalBtnStyle?: {};
  additionalLabelStyle?: {};
}

const PrimaryBtn = ({
  text,
  mode = 'contained',
  additionalBtnStyle,
  additionalLabelStyle,
  ...props
}: PrimaryBtnProps) => {
  return (
    <Button
      style={[styles.button, additionalBtnStyle]}
      labelStyle={[styles.label, additionalLabelStyle]}
      mode={mode}
      {...props}>
      {text}
    </Button>
  );
};
PrimaryBtn.defaultProps = {
  text: 'Set Text',
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
