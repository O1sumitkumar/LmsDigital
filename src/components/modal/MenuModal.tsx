import {Language, toggleLanguage} from '@toolkit/auth/auth.slice';
import {unitedStateFlag} from '@assets/svgs/unitedStateFlag';
import Typography from '@components/typography/Typography';
import {selectLanguage} from '@toolkit/auth/auth.selector';
import {RFValue} from 'react-native-responsive-fontsize';
import {AppDispatch, RootState} from '@toolkit/store';
import {useDispatch, useSelector} from 'react-redux';
import kuwaitFlag from '@assets/svgs/kuwaitFlag';
import useAppTheme from '@hooks/useAppTheme';
import {useTranslation} from 'react-i18next';
import {Menu} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import React from 'react';
import {
  DevSettings,
  I18nManager,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

interface MenuModalProps {
  visible: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}

const MenuModal = ({visible, closeMenu, openMenu}: MenuModalProps) => {
  const curLan = useSelector<RootState, string>(selectLanguage);
  const dispatch = useDispatch<AppDispatch>();
  const {colors} = useAppTheme();
  const {t} = useTranslation();

  const options = [
    {
      icon: <SvgXml xml={unitedStateFlag(RFValue(20))} />,
      title: 'English',
      onPress: () => handleLanguageChange('en'),
    },
    {
      icon: <SvgXml xml={kuwaitFlag(RFValue(20))} />,
      title: t('auth.arabic'),
      onPress: () => handleLanguageChange('ar'),
    },
  ];

  const handleLanguageChange = (language: Language) => {
    I18nManager.forceRTL(language === 'ar');
    dispatch(toggleLanguage(language));
    DevSettings.reload();
    closeMenu();
  };

  console.log(I18nManager);

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
            xml={curLan === 'ar' ? kuwaitFlag(30) : unitedStateFlag(30)}
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
