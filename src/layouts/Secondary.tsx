import {RFValue} from 'react-native-responsive-fontsize';
import {View} from 'react-native';
import React from 'react';

interface SecondaryLayoutProps {
  children: React.ReactNode;
  gap?: number;
  paddingVertical?: number;
}

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({
  children,
  gap = RFValue(16),
  paddingVertical = RFValue(16),
}) => {
  return (
    <View
      style={{
        gap: RFValue(gap),
        paddingVertical: RFValue(paddingVertical),
      }}>
      {children}
    </View>
  );
};

export default React.memo(SecondaryLayout);
