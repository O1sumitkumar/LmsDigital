import FooterBtn from '@components/button/FooterBtn';
import Typography from '@components/typography/Typography';
import useAppTheme from '@hooks/useAppTheme';
import Spacer from '@layouts/Spacer';
import React from 'react';
import {View} from 'react-native';
import {Dialog, Portal, Text} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

const PromptModal = () => {
  const {colors} = useAppTheme();
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  return (
    <Portal>
      <Dialog
        style={{
          borderRadius: RFValue(12),
          backgroundColor: colors.background,
          paddingHorizontal: RFValue(16),
          paddingBottom: RFValue(24),
          paddingTop: RFValue(24),
        }}
        visible={!visible}
        onDismiss={hideDialog}>
        {/* <View style={{backgroundColor: 'red'}}>
          <Text variant="bodyMedium">This is simple dialog</Text>
        </View> */}
        <Spacer paddingHorizontal={0} paddingVertical={0} gap={32}>
          <Typography
            text={'Title'}
            textAlign="center"
            fontSize={20}
            fontWeight="700"
          />
          <Spacer paddingHorizontal={0} paddingVertical={0} gap={16}>
            <Text variant="bodyMedium">This is simple dialog</Text>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Spacer>
          <FooterBtn />
        </Spacer>
      </Dialog>
    </Portal>
  );
};

export default PromptModal;
