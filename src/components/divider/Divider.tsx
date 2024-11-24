import Typography from '@components/typography/Typography';
import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
import React from 'react';

interface DividerProps {
  text?: string;
}

const DividerWithText: React.FC<DividerProps> = ({text = 'or'}) => {
  return (
    <View style={styles.container}>
      <Divider style={styles.dividerView} />
      <Typography text={text} fontSize={14} />
      <Divider style={styles.dividerView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: RFValue(8),
  },
  dividerView: {
    flex: 1,
  },
});

export default React.memo(DividerWithText);
