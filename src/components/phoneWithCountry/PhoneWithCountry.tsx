import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {TextInput, TextInputProps} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import InputField from '@input/InputField';
import React from 'react';

interface PhoneWithCountryProps extends TextInputProps {
  mobile: string;
  country?: string;
  countryCode: string;
  setCountryCode: (countryCode: CountryCode) => void;
  renderPhone: (props: any) => React.ReactNode;
  handleOpenBottomSheet?: () => void;
  readOnly?: boolean;
  label?: string;
  errText?: string;
  disabledClick?: boolean;
}

const PhoneWithCountry: React.FC<PhoneWithCountryProps> = ({
  mobile,
  countryCode,
  setCountryCode,
  renderPhone,
  handleOpenBottomSheet,
  readOnly,
  disabledClick,
  ...props
}) => {
  console.log('mobile', countryCode);
  return (
    <View style={styles.dialCodeContainer}>
      <InputField
        label="Dial Code"
        value={''}
        extraStyle={styles.phoneNumberBtn}
        right={
          <TextInput.Icon
            icon={() => renderPhone({countryCode, setCountryCode})}
            shouldRasterizeIOS={true}
            style={styles.phoneNumberBtnIcon}
            pointerEvents={disabledClick ? 'none' : 'auto'}
          />
        }
        readOnly
      />

      <InputField
        label="Phone Number"
        value={mobile}
        readOnly={readOnly}
        extraStyle={styles.phoneNumberContainer}
        onPressIn={handleOpenBottomSheet}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dialCodeContainer: {
    flexDirection: 'row',
    gap: RFPercentage(2),
    // flex: 1,
    // backgroundColor: 'red',
  },
  phoneNumberContainer: {
    width: RFValue(221),
    // flex: 0.6,
  },
  phoneNumberBtn: {
    // flex: 0.4,
    width: RFValue(70),
  },
  phoneNumberBtnIcon: {
    width: RFValue(100),
    paddingRight: RFPercentage(2),
    marginRight: RFPercentage(4),
  },
});

export default PhoneWithCountry;
