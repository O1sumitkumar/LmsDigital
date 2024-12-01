import * as React from 'react';
import {TextInput, Text, TextInputProps} from 'react-native-paper';
import {StyleSheet, View, useColorScheme} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface BtnProps extends TextInputProps {
  isDisabled?: boolean;
  errorText?: string;
  error?: boolean;
  placeholder?: string;
  label?: string;
  id?: string;
  multiline?: boolean;
  extraStyle?: any;
}

const InputField: React.FC<BtnProps> = ({
  error,
  placeholder,
  label,
  errorText,
  extraStyle,
  ...props
}) => {
  const colorScheme = useColorScheme();
  let dark = colorScheme === 'dark';

  const inputStyle = {
    backgroundColor: dark ? '#333' : '#F5F5F5',
    borderWidth: 0,
    paddingVertical: props.multiline ? 15 : 0,
    width: '100%',
  };
  return (
    <View>
      {Boolean(label) && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        mode="outlined"
        contentStyle={styles.inputContent}
        style={{...inputStyle, ...extraStyle}}
        activeOutlineColor="transparent"
        underlineColor="transparent"
        outlineColor="transparent"
        dense
        placeholderTextColor={dark ? '#B8B8B8' : '#999'}
        outlineStyle={styles.outlineCnt}
        cursorColor="#007bff"
        {...props}
      />
      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    paddingHorizontal: 3,
  },
  inputContent: {fontSize: 18},
  outlineCnt: {borderRadius: 8, padding: 0},
  label: {
    // color: '#3D3D3D',
    fontSize: RFValue(11),
    fontWeight: '600',
    paddingBottom: 6,
    paddingHorizontal: 4,
  },
});

export default InputField;
