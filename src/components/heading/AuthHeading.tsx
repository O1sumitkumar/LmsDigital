import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Typography from '@typography/Typography';
import React from 'react';

interface AuthHeadingProps {
  title: string;
  subTitle: string;
  titleAlign?: 'center' | 'end' | 'start' | 'justify';
  titleTextSize?: 14 | 16 | 24;
  subTitleTextSize?: 14 | 16 | 24;
}

const AuthHeading: React.FC<AuthHeadingProps> = ({
  title = 'title',
  subTitle = 'subtitle',
  titleAlign = 'center',
  titleTextSize = 24,
  subTitleTextSize = 14,
}) => {
  return (
    <View style={[styles.container, {alignItems: titleAlign} as ViewStyle]}>
      <Typography
        text={title}
        fontSize={titleTextSize}
        fontWeight="700"
        lineHeight={titleTextSize === 24 ? 32 : 24}
      />
      <Typography text={subTitle} fontSize={subTitleTextSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: RFValue(12),
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default AuthHeading;
