import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import AuthHeading from '@heading/AuthHeading';
import PrimaryLayout from '@layouts/Primary';
import {useTranslation} from 'react-i18next';
import PrimaryBtn from '@button/PrimaryBtn';
import Secondary from '@layouts/Secondary';
import Spacer from '@layouts/Spacer';
import React from 'react';

interface ResetSuccessfulProps extends ScreenProps {}

const ResetSuccessful: React.FC<ResetSuccessfulProps> = ({navigation}) => {
  const baseKey = 'auth.resetSuccessfulScreen';
  const {t} = useTranslation();

  const handleNavigate = () => {
    navigation.navigate('Login');
  };

  return (
    <PrimaryLayout>
      <AvoidKeyBoard>
        <Secondary isCenter gap={24}>
          <AuthHeading
            title={t(`${baseKey}.screenTitle`)}
            subTitle={''}
            titleAlign="center"
          />
          <Spacer paddingVertical={0} paddingHorizontal={0} gap={24}>
            <PrimaryBtn onPress={handleNavigate}>
              {t(`${baseKey}.submitBtn`)}
            </PrimaryBtn>
          </Spacer>
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default ResetSuccessful;
