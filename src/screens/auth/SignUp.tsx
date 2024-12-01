import PhoneWithCountry from '@components/phoneWithCountry/PhoneWithCountry';
import CombinationTextBtn from '@components/button/CombinationTextBtn';
import CheckBoxWithText from '@components/button/CheckBoxWithText';
import PhoneNumber from '@components/phoneNumber/PhoneNumber';
import SocialAuth from '@components/socialAuth/SocialAuth';
import DividerWithText from '@components/divider/Divider';
import PrimaryBtn from '@components/button/PrimaryBtn';
import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import {initialCountryCode} from '@utils/utils';
import AuthHeading from '@heading/AuthHeading';
import {useTranslation} from 'react-i18next';
import PrimaryLayout from '@layouts/Primary';
import Secondary from '@layouts/Secondary';
import InputField from '@input/InputField';
import React, {useState} from 'react';
import Spacer from '@layouts/Spacer';

interface SignUpProps extends ScreenProps {}

const renderPhone = ({
  countryCode,
  setCountryCode,
}: {
  countryCode: CountryCode;
  setCountryCode: (code: string) => void;
}) => {
  return <PhoneNumber countryCode={countryCode} onSelect={setCountryCode} />;
};

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [countryCode, setCountryCode] =
    useState<CountryCode>(initialCountryCode);
  const baseKey = 'auth.signUpScreen';
  const {t} = useTranslation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <PrimaryLayout>
      <AvoidKeyBoard>
        <Secondary isCenter>
          <AuthHeading
            title={t(`${baseKey}.screenTitle`)}
            subTitle={t(`${baseKey}.subTitle`)}
          />
          <SocialAuth
            onApplePress={() => {}}
            onFacebookPress={() => {}}
            onGooglePress={() => {}}
          />
          <DividerWithText text={t('auth.or')} />
          <Spacer paddingVertical={0} paddingHorizontal={0} gap={16}>
            <InputField
              label={t(`${baseKey}.emailAddress`)}
              error={false}
              errorText={''}
            />
            <InputField
              label={t(`${baseKey}.password`)}
              error={false}
              errorText={''}
            />
            <PhoneWithCountry
              label={t(`${baseKey}.mobileNumber`)}
              countryCode={countryCode.countryCode}
              setCountryCode={setCountryCode}
              renderPhone={renderPhone}
              // value={formik.values.phoneNumber}
              // onChangeText={formik.handleChange('phoneNumber')}
              // error={!!formik.errors.phoneNumber && formik.touched.phoneNumber}
              // errText={formik.errors.phoneNumber}
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              // autoFocus={!mobile}
              mobile={''}
              country={''}
            />
            <CheckBoxWithText
              subTitle={t(`${baseKey}.iAgree`)}
              subtitleBtnText={t(`${baseKey}.terms`)}
              onPress={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
            <PrimaryBtn onPress={() => handleNavigate('CompleteProfile')}>
              {t(`${baseKey}.screenTitle`)}
            </PrimaryBtn>
            <CombinationTextBtn
              onPress={() => handleNavigate('Login')}
              subTitle={t(`${baseKey}.alreadyHaveAccount`)}
              btnText={t(`${baseKey}.login`)}
            />
          </Spacer>
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default SignUp;
