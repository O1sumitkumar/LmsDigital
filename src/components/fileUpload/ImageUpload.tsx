import React, {useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
// import ImagePicker from 'react-native-image-picker';

interface ImageUploadProps {
  source?: any;
  size?: number;
  onPress?: () => void;
  title: string;
}

const ProfileUpload: React.FC<ImageUploadProps> = ({title}) => {
  const [avatarSource, setAvatarSource] = useState(null);

  // const selectPhotoTapped = () => {
  //   const options = {
  //     quality: 1.0,
  //     maxWidth: 500,
  //     maxHeight: 500,
  //     storageOptions: {
  //       skipBackup: true,
  //     },
  //   };

  //   ImagePicker.showImagePicker(options, response => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled photo picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       let source = {uri: response.uri};

  //       // You can also display the image using data:
  //       // let source = { uri: 'data:image/jpeg;base64,' + response.data };

  //       setAvatarSource(source);
  //     }
  //   });
  // };
  const colorScheme = useColorScheme();
  let dark = colorScheme === 'dark';
  return (
    <View style={{justifyContent: 'center', gap: 1}}>
      <Text style={styles.label}>{title}</Text>
      <Avatar.Image
        size={RFValue(80)}
        style={{backgroundColor: dark ? '#333' : '#F5F5F5', borderWidth: 0}}
        // source={avatarSource ? avatarSource : require('')}
      />
      {/* <Button title={'Select Photo'} onPress={selectPhotoTapped} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    // color: '#3D3D3D',
    fontWeight: '600',
    fontSize: RFValue(14),
    paddingBottom: 6,
    paddingHorizontal: 6,
  },
});

export default ProfileUpload;
