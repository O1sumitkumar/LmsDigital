import Typography from '@typography/Typography';
import useAppTheme from '@hooks/useAppTheme';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, TextInputProps} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

interface InputFieldProps extends TextInputProps {
  label: string;
  isError: boolean;
  errorText: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  errorText = 'err',
  isError,
  ...props
}) => {
  const {colors} = useAppTheme();

  return (
    <View style={styles.container}>
      <Typography
        text={label}
        fontWeight="600"
        fontSize={14}
        paddingHorizontal={4}
      />
      <TextInput
        dense
        // style={styles.input}
        mode="outlined"
        cursorColor={colors.primary}
        outlineColor="transparent"
        // underlineColor="transparent"
        activeOutlineColor="transparent"
        contentStyle={{
          fontSize: RFValue(14),
        }}
        outlineStyle={styles.outlineStyle}
        {...props}
      />
      {!isError && (
        <Typography
          paddingHorizontal={4}
          text={errorText}
          fontSize={12}
          fontColor={colors.error}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: RFValue(4),
  },
  outlineStyle: {
    borderRadius: RFValue(8),
    backgroundColor: '#F7F7F7',
  },
});

export default React.memo(InputField);
