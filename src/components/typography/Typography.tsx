import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

interface TypographyProps {
  text: string;
  fontSize: 24 | 14;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: 'normal' | 'bold';
  lineHeight?: 14 | 24 | 32;
}

function styleWithProp(props: TypographyProps) {
  return StyleSheet.create({
    text: {
      fontSize: RFValue(props.fontSize),
      textAlign: props.textAlign,
      fontWeight: props.fontWeight,
      lineHeight: RFValue(props.lineHeight ?? 20),
    },
  });
}

const Typography: React.FC<TypographyProps> = ({
  text,
  fontSize,
  textAlign,
  fontWeight,
  lineHeight,
}) => {
  return (
    <Text
      style={
        styleWithProp({text, fontSize, textAlign, fontWeight, lineHeight}).text
      }>
      {text}
    </Text>
  );
};

export default React.memo(Typography);
