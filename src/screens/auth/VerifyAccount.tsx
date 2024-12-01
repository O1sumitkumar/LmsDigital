import CombinationTextBtn from '@button/CombinationTextBtn';
import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import AuthHeading from '@heading/AuthHeading';
import PrimaryLayout from '@layouts/Primary';
import {useTranslation} from 'react-i18next';
import PrimaryBtn from '@button/PrimaryBtn';
import Secondary from '@layouts/Secondary';
import Spacer from '@layouts/Spacer';
import React from 'react';

interface VerifyAccountProps extends ScreenProps {}

const VerifyAccount: React.FC<VerifyAccountProps> = ({navigation}) => {
  const baseKey = 'auth.verifyAccountScreen';
  const {t} = useTranslation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <PrimaryLayout>
      <AvoidKeyBoard>
        <Secondary isCenter gap={24}>
          <AuthHeading
            title={t(`${baseKey}.screenTitle`)}
            subTitle={t(`${baseKey}.subTitle`)}
            titleAlign="center"
          />
          <Spacer paddingVertical={0} paddingHorizontal={0} gap={24}>
            <CombinationTextBtn
              onPress={() => handleNavigate('AccountVerified')}
              subTitle={t(`${baseKey}.didntRecieve`)}
            />
            <PrimaryBtn onPress={() => handleNavigate('AccountVerified')}>
              {t(`${baseKey}.submitBtn`)}
            </PrimaryBtn>
          </Spacer>
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default VerifyAccount;
