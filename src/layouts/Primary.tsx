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
  const centerContainer = {
    ...style.container,
    justifyContent: 'center',
  };

  return (
    <SafeAreaView
      edges={edges}
      style={isCenter ? centerContainer : style.container}>
      {isScroll ? (
        <ScrollView>{children}</ScrollView>
      ) : (
        <View style={style.container}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PrimaryLayout;
