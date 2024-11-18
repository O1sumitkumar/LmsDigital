import {RFValue} from 'react-native-responsive-fontsize';
import {Button, ButtonProps} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import * as React from 'react';

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
}: PrimaryBtnProps) => (
  <Button
    style={[styles.button, additionalBtnStyle]}
    labelStyle={[styles.label, additionalLabelStyle]}
    mode={mode}
    {...props}>
    {text}
  </Button>
);

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
