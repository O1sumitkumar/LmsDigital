import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import AuthHeading from '@heading/AuthHeading';
import PrimaryLayout from '@layouts/Primary';
import {useTranslation} from 'react-i18next';
import PrimaryBtn from '@button/PrimaryBtn';
import Secondary from '@layouts/Secondary';
import Spacer from '@layouts/Spacer';
import React from 'react';

interface AccountVerifiedProps extends ScreenProps {}

const AccountVerified: React.FC<AccountVerifiedProps> = ({navigation}) => {
  const baseKey = 'auth.accountVerifiedScreen';
  const {t} = useTranslation();

  const handleNavigate = () => {
    navigation.navigate('SignUp');
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
            <PrimaryBtn>{t(`${baseKey}.submitBtn`)}</PrimaryBtn>
          </Spacer>
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default AccountVerified;
