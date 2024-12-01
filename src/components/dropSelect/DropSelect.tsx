import {StyleSheet, useColorScheme, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {RFValue} from 'react-native-responsive-fontsize';
import useAppTheme from '@hooks/useAppTheme';
import {Icon, Text} from 'react-native-paper';
import React from 'react';

interface DropdownSelectProps {
  label: string;
  data: {key: string; value: string}[];
  setSelected: (selected: string) => void;
  placeholder: string;
  error: boolean;
  errorText?: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  placeholder,
  data,
  setSelected,
  error,
  errorText,
  label,
}) => {
  const {colors} = useAppTheme();
  const colorScheme = useColorScheme();
  let dark = colorScheme === 'dark';

  const boxStyles = {
    ...styles.boxStyles,
    backgroundColor: dark ? '#333' : '#F5F5F5',
  };

  const inputStyles = {
    color: colors.text,
    fontSize: RFValue(12),
    paddingTop: RFValue(1.5),
    paddingHorizontal: 10,
  };

  return (
    <View>
      {Boolean(label) && <Text style={styles.label}>{label}</Text>}
      <SelectList
        dropdownTextStyles={{
          color: colors.text,
        }}
        inputStyles={inputStyles}
        dropdownStyles={boxStyles}
        arrowicon={
          <Icon source="chevron-down" allowFontScaling size={RFValue(18)} />
        }
        closeicon={
          <Icon source="chevron-up" allowFontScaling size={RFValue(18)} />
        }
        searchicon={
          <Icon source="magnify" allowFontScaling size={RFValue(18)} />
        }
        boxStyles={boxStyles}
        setSelected={(val: string) => setSelected(val)}
        placeholder={placeholder}
        data={data}
        search={true}
        save="value"
      />
      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  boxStyles: {
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#E5E5E5',
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: RFValue(11),
    fontWeight: '600',
    paddingBottom: 6,
    paddingHorizontal: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    paddingHorizontal: 3,
  },
});

export default DropdownSelect;
