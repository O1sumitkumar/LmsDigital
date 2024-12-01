import useAppTheme from '@hooks/useAppTheme';
import React from 'react';
import {View} from 'react-native';
import CountryPicker, {
  DARK_THEME,
  DEFAULT_THEME,
} from 'react-native-country-picker-modal';

interface CountryPickerProps {
  countryCode: CountryCode;
  onSelect: (country: any) => void;
}

const PhoneNumber: React.FC<CountryPickerProps> = ({
  countryCode,
  onSelect,
  ...props
}) => {
  const isDarkMode = useAppTheme().dark;
  const handleSelect = (country: any) => {
    const selectedData = {
      countryCode: country.cca2,
      callingCode: country.callingCode[0],
      countryName: country.name,
      flag: country.flag,
    };
    onSelect(selectedData);
  };

  return (
    <View>
      <CountryPicker
        theme={isDarkMode ? DARK_THEME : DEFAULT_THEME}
        countryCode={countryCode as any}
        onSelect={handleSelect}
        withCallingCode
        withFilter
        withFlag
        withCallingCodeButton
        // containerButtonStyle={{}}
        {...props}
      />
    </View>
  );
};

export default PhoneNumber;
