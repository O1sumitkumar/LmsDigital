import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import React from 'react';

interface SocialAuthProps {
  onGooglePress: () => void;
  onApplePress: () => void;
  onFacebookPress: () => void;
}

const SocialAuth: React.FC<SocialAuthProps> = ({
  onGooglePress,
  onApplePress,
  onFacebookPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <IconButton icon="google" size={RFValue(20)} onPress={onGooglePress} />
      </View>
      <View style={styles.iconView}>
        <IconButton
          icon="facebook"
          size={RFValue(20)}
          onPress={onFacebookPress}
        />
      </View>
      <View style={styles.iconView}>
        <IconButton icon="apple" size={RFValue(20)} onPress={onApplePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: RFValue(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    borderWidth: RFValue(1),
    borderColor: '#EBEBEB',
    borderRadius: RFValue(50),
  },
});

export default React.memo(SocialAuth);
