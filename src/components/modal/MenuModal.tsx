import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Language, toggleLanguage} from '@toolkit/auth/auth.slice';
import {unitedStateFlag} from '@assets/svgs/unitedStateFlag';
import {selectLanguage} from '@toolkit/auth/auth.selector';
import {RFValue} from 'react-native-responsive-fontsize';
import {AppDispatch, RootState} from '@toolkit/store';
import {useDispatch, useSelector} from 'react-redux';
import kuwaitFlag from '@assets/svgs/kuwaitFlag';
import Typography from '@typography/Typography';
import MessageModal from '@modal/MessageModal';
import useAppTheme from '@hooks/useAppTheme';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import {Menu} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import React, {useState} from 'react';

interface MenuModalProps {
  closeMenu: () => void;
  openMenu: () => void;
  visible: boolean;
}

const MenuModal = ({visible, closeMenu, openMenu}: MenuModalProps) => {
  const curLan = useSelector<RootState, string>(selectLanguage);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [arg, setArg] = useState<Language>('en');
  const dispatch = useDispatch<AppDispatch>();
  const {colors} = useAppTheme();
  const {t} = useTranslation();

  const options = [
    {
      icon: <SvgXml xml={unitedStateFlag(RFValue(20))} />,
      title: 'English',
      onPress: () => {
        setIsVisible(true);
        setArg('en');
      },
    },
    {
      icon: <SvgXml xml={kuwaitFlag(RFValue(20))} />,
      title: t('auth.arabic'),
      onPress: () => {
        setIsVisible(true);
        setArg('ar');
      },
    },
  ];

  const handleLanguageChange = () => {
    if (curLan === arg) {
      setIsVisible(false);
      closeMenu();
      return;
    }
    I18nManager.forceRTL(arg === 'ar');
    dispatch(toggleLanguage(arg));
    RNRestart.restart();
    setIsVisible(false);
    closeMenu();
  };

  return (
    <Menu
      contentStyle={[styles.card, {backgroundColor: colors.surface}]}
      visible={visible}
      anchorPosition="bottom"
      elevation={5}
      style={styles.meuContainer}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity onPress={openMenu}>
          <SvgXml
            xml={I18nManager.isRTL ? kuwaitFlag(30) : unitedStateFlag(30)}
          />
        </TouchableOpacity>
      }>
      {options.map((option, index) => (
        <View key={index + 'option'} style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => option.onPress()}>
            {option.icon}
            <Typography
              text={option.title}
              lineHeight={24}
              fontSize={14}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>
      ))}
      <MessageModal
        message={'App needs to be restarted, do you want to continue?'}
        title={'Confirmation'}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onContainedBtnPress={handleLanguageChange}
        containedBtnText="Confirm"
      />
    </Menu>
  );
};

const styles = StyleSheet.create({
  meuContainer: {
    marginVertical: RFValue(40),
  },
  card: {
    borderRadius: RFValue(10),
    paddingRight: RFValue(30),
    paddingLeft: RFValue(14),
  },
  optionContainer: {
    flexDirection: 'row',
    gap: RFValue(8),
    alignItems: 'center',
    paddingVertical: RFValue(3),
  },
});

export default React.memo(MenuModal);
