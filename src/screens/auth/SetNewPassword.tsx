import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import AuthHeading from '@heading/AuthHeading';
import PrimaryLayout from '@layouts/Primary';
import {useTranslation} from 'react-i18next';
import PrimaryBtn from '@button/PrimaryBtn';
import Secondary from '@layouts/Secondary';
import InputField from '@input/InputField';
import Spacer from '@layouts/Spacer';
import React from 'react';

interface SetNewPasswordProps extends ScreenProps {}

const SetNewPassword: React.FC<SetNewPasswordProps> = ({navigation}) => {
  const baseKey = 'auth.setNewPasswordScreen';
  const {t} = useTranslation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <PrimaryLayout>
      <AvoidKeyBoard>
        <Secondary isCenter gap={16}>
          <AuthHeading
            title={t(`${baseKey}.screenTitle`)}
            subTitle={t(`${baseKey}.subTitle`)}
            titleAlign="center"
          />

          <Spacer paddingVertical={0} paddingHorizontal={0} gap={16}>
            <InputField
              label={t(`${baseKey}.newPassword`)}
              error={false}
              errorText={''}
            />
            <InputField
              label={t(`${baseKey}.confirmNewPassword`)}
              error={false}
              errorText={''}
            />
          </Spacer>

          <Spacer paddingVertical={24} paddingHorizontal={0} gap={16}>
            <PrimaryBtn onPress={() => handleNavigate('ResetEmailSent')}>
              {t(`${baseKey}.submitBtn`)}
            </PrimaryBtn>
          </Spacer>
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default SetNewPassword;
