import React, { useState, useRef } from 'react';
import { Animated, Button, Dimensions, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';


import RNFetchBlob from 'rn-fetch-blob'

import {
  Container,
  Left,
  ContentPlaying,
  LinePlay,
  CurrentPlay,
  Duration,
  Right,
} from './styles';

const Play = ({ dataItem,audioRecorderPlayer }) => {
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
    }).start(({ finished }) => {
      HandlePauseRecord()
    });
  };
  const HandlePauseRecord = () => {
    EnableHeight.setValue(0)
    setPlaying(false);
  }


  const [isAlreadyPlay, setisAlreadyPlay] = useState(false);
  const [duration, setDuration] = useState('00:00');
  const [timeElapsed, setTimeElapsed] = useState('00:00');
  const [percent, setPercent] = useState(0);
  const [current_track, setCurrentTrack] = useState(0);
  const [reproduzindo, SetReproduzindo] = useState(0);
  const [inprogress, setInprogress] = useState(false);

  // const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

  ///storage/emulated/0/Download - local atual
  let dirs = RNFetchBlob.fs.dirs.DownloadDir;

  const changeTime = async (seconds) => {
    // 50 / duration
    let seektime = (seconds / 100) * duration;
    setTimeElapsed(seektime);
    audioRecorderPlayer.seekToPlayer(seektime);
  };

  const onStartPress = async (e) => {
    setisAlreadyPlay(true);
    setPlaying(true);
    setInprogress(true);
    const path = 'file://' + dirs + '/' + dataItem.path;
    audioRecorderPlayer.startPlayer(path);
    audioRecorderPlayer.setVolume(1.0);

    audioRecorderPlayer.addPlayBackListener(async (e) => {
      if (e.currentPosition === e.duration) {
        setPlaying(false)
        audioRecorderPlayer.stopPlayer();
      }


      let percent = Math.round(
        (Math.floor(e.currentPosition) / Math.floor(e.duration)) * 100,
      );
      setTimeElapsed(e.currentPosition);

      setPercent(percent);


      setDuration(e.duration);
    });
  };

  const onPausePress = async (e) => {
    setisAlreadyPlay(false);
    setPlaying(false)
    audioRecorderPlayer.pausePlayer();
  };

  const onStopPress = async (e) => {

    await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setPlaying(false)
  };

  const onStartStack = async () => {

    onStopPress().then(async () => {

      await onStartPress();
    }).catch(onStopPress());
  };



  return (
    <Container>
      <Left onPress={() => playing ? onPausePress() : onStartStack()}>
        <Icon
          name={playing ? 'pause' : 'play-arrow'}
          size={50}
          color="#417E6B"
        />
      </Left>
      <ContentPlaying>
        <LinePlay>
          <Slider
            minimumValue={0}
            maximumValue={100}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            value={percent}
            minimumTrackTintColor="#93A8B3"
            onValueChange={(seconds) => changeTime(seconds)}
          />
        </LinePlay>
        <Right>
          <Icon name="mic" size={20} color="#0060C1" />
          <Duration>{!inprogress
              ? timeElapsed
              : audioRecorderPlayer.mmssss(Math.floor(timeElapsed))}</Duration>
        </Right>

      </ContentPlaying>
    </Container>
  );


};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEC',
  },
  textLight: {
    color: '#B6B7BF',
  },
  text: {
    color: '#8E97A6',
  },
  titleContainer: { alignItems: 'center', marginTop: 24 },
  textDark: {
    color: '#3D425C',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  coverContainer: {
    marginTop: 32,
    width: 250,
    height: 250,
    shadowColor: '#5D3F6A',
    shadowOffset: { height: 15 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  cover: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: '#FFF',
  },
  thumb: {
    width: 8,
    height: 8,
    backgroundColor: '#3D425C',
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: '500',
  },
  seekbar: { margin: 32 },
  inprogress: {
    marginTop: -12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trackname: { alignItems: 'center', marginTop: 32 },
});

export default Play;
