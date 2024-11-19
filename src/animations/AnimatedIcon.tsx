import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  const onPress = () => {
    setLiked(!liked);
    scale.value = withSpring(1.2, {}, () => {
      scale.value = withSpring(1);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={animatedStyle}>
        <Icon
          source={liked ? 'heart' : 'heart-outline'}
          size={40}
          color={liked ? 'red' : 'gray'}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default LikeButton;
