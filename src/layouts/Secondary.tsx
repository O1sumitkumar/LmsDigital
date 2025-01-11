import {RFValue} from 'react-native-responsive-fontsize';
import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

interface SecondaryLayoutProps {
  children: React.ReactNode;
  paddingVertical?: number;
  gap?: number;
  isScroll?: boolean;
  isCenter?: boolean;
}

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({
  children,
  gap = 16,
  paddingVertical = 16,
  isScroll = false,
  isCenter = false,
}) => {
  const centerContainer = {
    ...style.container,
    justifyContent: 'center',
    gap: RFValue(gap),
    paddingVertical: RFValue(paddingVertical),
    flex: 1,
  };

  const defaultContainer = {
    ...style.container,
    gap: RFValue(gap),
    paddingVertical: RFValue(paddingVertical),
  };

  return (
    <>
      {isScroll ? (
        <ScrollView
          automaticallyAdjustKeyboardInsets
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          centerContent
          key="secondaryLayout"
          style={style.scrollView}>
          <View style={isCenter ? centerContainer : defaultContainer}>
            {children}
          </View>
        </ScrollView>
      ) : (
        <View style={isCenter ? centerContainer : defaultContainer}>
          {children}
        </View>
      )}
    </>
  );
};

const style = StyleSheet.create({
  container: {
    gap: RFValue(16),
    paddingVertical: RFValue(16),
    flexGrow: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default React.memo(SecondaryLayout);
