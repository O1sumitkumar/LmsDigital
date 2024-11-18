import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';

interface PrimaryLayoutProps {
  children: React.ReactNode;
  isScroll?: boolean;
  edges?: Edge[];
  isCenter?: boolean;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
  children,
  isScroll,
  edges = ['top', 'bottom'],
  isCenter = false,
}) => {
  const justifyContent = isCenter ? 'center' : 'flex-start';
  const alignItems = isCenter ? 'center' : 'flex-start';

  return (
    <SafeAreaView
      edges={edges}
      style={[style.container, {justifyContent, alignItems}]}>
      {isScroll ? <ScrollView>{children}</ScrollView> : <View>{children}</View>}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PrimaryLayout;
