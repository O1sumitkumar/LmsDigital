import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {unitedStateFlag} from '@assets/svgs/unitedStateFlag';
import {selectLanguage} from '@toolkit/auth/auth.selector';
import Typography from '@components/typography/Typography';
import {RFValue} from 'react-native-responsive-fontsize';
import {toggleLanguage} from '@toolkit/auth/auth.slice';
import {useDispatch, useSelector} from 'react-redux';
import kuwaitFlag from '@assets/svgs/kuwaitFlag';
import {RootState} from '@toolkit/rootReducer';
import useAppTheme from '@hooks/useAppTheme';
import {useTranslation} from 'react-i18next';
import {AppDispatch} from '@toolkit/store';
import {Menu} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import React from 'react';

interface MenuModalProps {
  visible: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}

const options = [
  {icon: <SvgXml xml={unitedStateFlag(RFValue(20))} />, title: 'English'},
  {icon: <SvgXml xml={kuwaitFlag(RFValue(20))} />, title: 'Arabic'},
];

const MenuModal = ({visible, closeMenu, openMenu}: MenuModalProps) => {
  const language = useSelector<RootState, string>(selectLanguage);
  const dispatch = useDispatch<AppDispatch>();
  const {i18n} = useTranslation();
  const {colors} = useAppTheme();

  const handleLanguageChange = () => {
    const selectedLanguage = language === 'ar' ? 'en' : 'ar';
    dispatch(toggleLanguage(selectedLanguage));
    i18n.changeLanguage(selectedLanguage);
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
            xml={language === 'ar' ? kuwaitFlag(30) : unitedStateFlag(30)}
          />
        </TouchableOpacity>
      }>
      {options.map((option, index) => (
        <View key={index + 'option'} style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={handleLanguageChange}>
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
