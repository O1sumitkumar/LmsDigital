import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

interface TypographyProps {
  text: string;
  fontSize: 12 | 14 | 16 | 24;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: 'normal' | 'bold' | '600' | '700' | '500' | '400';
  lineHeight?: 14 | 24 | 32;
  fontColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

function styleWithProp(props: TypographyProps) {
  return StyleSheet.create({
    text: {
      fontSize: RFValue(props.fontSize),
      textAlign: props.textAlign,
      fontWeight: props.fontWeight,
      lineHeight: RFValue(props.lineHeight ?? 20),
      paddingHorizontal: RFValue(props.paddingHorizontal ?? 0),
      paddingVertical: RFValue(props.paddingVertical ?? 0),
      ...(props.fontColor && {color: props.fontColor}),
    },
  });
}

const Typography: React.FC<TypographyProps> = ({
  text,
  fontSize,
  textAlign,
  fontWeight,
  lineHeight,
  fontColor,
  paddingHorizontal,
  paddingVertical,
}) => {
  return (
    <Text
      style={
        styleWithProp({
          text,
          fontSize,
          textAlign,
          fontWeight,
          lineHeight,
          fontColor,
          paddingHorizontal,
          paddingVertical,
        }).text
      }>
      {text}
    </Text>
  );
};

export default React.memo(Typography);
