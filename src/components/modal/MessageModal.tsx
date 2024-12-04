import PromptModal, {PromptModalProps} from '@modal/PromptModal';
import Typography from '@typography/Typography';
import React from 'react';

interface MessageModalProps extends PromptModalProps {
  message: string;
}

const MessageModal: React.FC<MessageModalProps> = ({
  onContainedBtnPress,
  onOutlinedBtnPress,
  setIsVisible,
  isVisible,
  message,
  title,
}) => {
  return (
    <PromptModal
      title={title}
      onContainedBtnPress={onContainedBtnPress}
      onOutlinedBtnPress={onOutlinedBtnPress}
      isVisible={isVisible}
      setIsVisible={setIsVisible}>
      <Typography text={message} textAlign="center" fontSize={14} />
    </PromptModal>
  );
};

export default MessageModal;
