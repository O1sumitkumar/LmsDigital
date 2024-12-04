import FooterBtn, {FooterBtnProps} from '@button/FooterBtn';
import {RFValue} from 'react-native-responsive-fontsize';
import {Dialog, Portal} from 'react-native-paper';
import Typography from '@typography/Typography';
import useAppTheme from '@hooks/useAppTheme';
import {StyleSheet} from 'react-native';
import Spacer from '@layouts/Spacer';
import React from 'react';

export interface PromptModalProps extends FooterBtnProps {
  title: string;
  isVisible: boolean;
  children: React.ReactNode;
  setIsVisible: (isVisible: boolean) => void;
}

const PromptModal: React.FC<PromptModalProps> = ({
  setIsVisible = () => {},
  onContainedBtnPress,
  title = 'Set Title',
  onOutlinedBtnPress,
  isVisible,
  children,
}) => {
  const {colors} = useAppTheme();

  const hideDialog = () => setIsVisible(false);

  const containerStyle = {
    ...styles.container,
    backgroundColor: colors.background,
  };

  return (
    <Portal>
      <Dialog style={containerStyle} visible={isVisible} onDismiss={hideDialog}>
        <Spacer paddingHorizontal={0} paddingVertical={0} gap={32}>
          <Typography
            text={title}
            textAlign="center"
            fontSize={20}
            fontWeight="700"
          />
          <Spacer paddingHorizontal={0} paddingVertical={0} gap={16}>
            {children}
          </Spacer>
          <FooterBtn
            onContainedBtnPress={onContainedBtnPress}
            onOutlinedBtnPress={onOutlinedBtnPress ?? hideDialog}
          />
        </Spacer>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(12),
    paddingHorizontal: RFValue(16),
    paddingBottom: RFValue(24),
    paddingTop: RFValue(24),
  },
});

export default PromptModal;
