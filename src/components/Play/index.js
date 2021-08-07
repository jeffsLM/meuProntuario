import React, {useState, useRef} from 'react';
import {Animated, Button, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Left,
  ContentPlaying,
  LinePlay,
  CurrentPlay,
  Duration,
  Right,
} from './styles';

const Play = () => {
  const [playing, setPlaying] = useState(false);
  const WIDTH = Dimensions.get('window').width;

  const MAX_WIDTH = WIDTH * 0.53;

  const EnableHeight = useRef(new Animated.Value(0)).current;

  const HandlePlayRecord = () => {
    setPlaying(true);
    Animated.timing(EnableHeight, {
      speed: 0,
      toValue: MAX_WIDTH,
      useNativeDriver: false,
      duration: 3600, // milisegundos
      // bounciness: 10,
      // delay: 50,
    }).start(({finished}) => {
      HandlePauseRecord()
    });
  };


  const HandlePauseRecord = () => {
    EnableHeight.setValue(0)
    setPlaying(false);
  }

  return (
    <Container>
      <Left onPress={() => HandlePlayRecord()}>
        <Icon
          name={playing ? 'pause' : 'play-arrow'}
          size={50}
          color="#417E6B"
        />
      </Left>
      <ContentPlaying>
        <LinePlay>
          <CurrentPlay
            style={[
              {
                width: EnableHeight.interpolate({
                  inputRange: [1, MAX_WIDTH],
                  outputRange: [7, MAX_WIDTH],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          />
        </LinePlay>
        <Right>
          <Icon name="mic" size={20} color="#0060C1" />
          <Duration>1:52</Duration>
        </Right>
      </ContentPlaying>
    </Container>
  );
};

export default Play;
