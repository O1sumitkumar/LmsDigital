import {unitedStateFlag} from '@assets/svgs/unitedStateFlag';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Menu} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgXml} from 'react-native-svg';

interface MenuModalProps {
  visible: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}

const MenuModal = ({visible, closeMenu, openMenu}: MenuModalProps) => {
  return (
    <Menu
      visible={visible}
      anchorPosition="bottom"
      style={{
        marginVertical: RFValue(40),
        // marginHorizontal: RFValue(30),
      }}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity onPress={openMenu}>
          <SvgXml xml={unitedStateFlag(30)} />
        </TouchableOpacity>
      }>
      <Menu.Item
        onPress={() => console.log('Option 1 clicked')}
        title="Option 1"
      />
      <Menu.Item
        onPress={() => console.log('Option 2 clicked')}
        title="Option 2"
      />
    </Menu>
  );
};

export default React.memo(MenuModal);
