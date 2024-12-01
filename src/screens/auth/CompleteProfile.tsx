import PhoneWithCountry from '@components/phoneWithCountry/PhoneWithCountry';
import ProfileUpload from '@components/fileUpload/ImageUpload';
import PhoneNumber from '@components/phoneNumber/PhoneNumber';
import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import {initialCountryCode} from '@utils/utils';
import AuthHeading from '@heading/AuthHeading';
import PrimaryLayout from '@layouts/Primary';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native-paper';
import PrimaryBtn from '@button/PrimaryBtn';
import InputField from '@input/InputField';
import Secondary from '@layouts/Secondary';
import React, {useState} from 'react';
import Spacer from '@layouts/Spacer';

interface CompleteProfileProps extends ScreenProps {}

const renderPhone = ({
  countryCode,
  setCountryCode,
}: {
  countryCode: CountryCode;
  setCountryCode: (code: string) => void;
}) => {
  return <PhoneNumber countryCode={countryCode} onSelect={setCountryCode} />;
};

const CompleteProfile: React.FC<CompleteProfileProps> = ({navigation}) => {
  const [countryCode, setCountryCode] =
    useState<CountryCode>(initialCountryCode);
  const baseKey = 'auth.completeProfileScreen';
  const preKey = 'auth.signUpScreen';
  const {t} = useTranslation();

  const handleNavigate = () => {
    navigation.navigate('SignUp');
  };

  return (
    <PrimaryLayout edges={['top']}>
      <AvoidKeyBoard>
        <Secondary isCenter isScroll>
          <AuthHeading
            title={t(`${baseKey}.screenTitle`)}
            subTitle={t(`${baseKey}.subTitle`)}
          />
          <ProfileUpload title={t(`${baseKey}.profileImage`)} />

          <Spacer paddingVertical={0} paddingHorizontal={0} gap={16}>
            <InputField
              label={t(`${baseKey}.name`)}
              error={false}
              errorText={''}
            />
            <InputField
              label={t(`${preKey}.emailAddress`)}
              error={false}
              errorText={''}
            />
            <InputField
              label={t(`${baseKey}.bio`)}
              multiline
              numberOfLines={4}
              error={false}
              errorText={''}
            />
            <InputField
              label={t(`${baseKey}.services`)}
              error={false}
              errorText={''}
            />
            <InputField
              label={t(`${baseKey}.profileUrl`)}
              error={false}
              placeholder={t(`${baseKey}.urlHint`)}
              errorText={''}
              left={<TextInput.Affix i18nIsDynamicList text="Afeed.com /" />}
            />
            <PhoneWithCountry
              label={t(`${preKey}.mobileNumber`)}
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
            <PhoneWithCountry
              label={t(`${baseKey}.customerPhone`)}
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
          </Spacer>
          <PrimaryBtn>{t(`${baseKey}.screenTitle`)}</PrimaryBtn>
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default CompleteProfile;
