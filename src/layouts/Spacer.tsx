import React, {memo} from 'react';
import {View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface SpacerProps {
  gap?: number;
  children: React.ReactNode;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

const Spacer: React.FC<SpacerProps> = ({
  gap = 10,
  children,
  paddingHorizontal = 10,
  paddingVertical = 10,
}) => {
  return (
    <View
      style={{
        gap: RFValue(gap),
        paddingHorizontal: RFValue(paddingHorizontal),
        paddingVertical: RFValue(paddingVertical),
      }}>
      {children}
    </View>
  );
};

export default memo(Spacer);
