import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

import RNFetchBlob from 'rn-fetch-blob'

import Card from '~/components/Card';
import Logo from '~/components/Logo';
import ImagePacient from '~/components/ImagePacient';
import Group from '~/components/Group';
import Play from '~/components/Play';

import { Container, Header, Tag, TagName, Touch, List } from './styles';

function MedicalRecord({ route, navigation }) {
  const [data, setData] = useState(navigation.getParam('dataItem', 'NO-ID'));
  const [star, setStar] = useState(data.star);
  const [currentAudio, SetCurrentAudio] = useState([]);
  const audioRecorderPlayer = new AudioRecorderPlayer();
  audioRecorderPlayer.setSubscriptionDuration(0.01);

  const path = 'hello.m4a';

  const audioSet = {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    AVNumberOfChannelsKeyIOS: 2,
    AVFormatIDKeyIOS: AVEncodingOption.aac,

  };

  console.log('audioSet', audioSet);

  const uri = audioRecorderPlayer.startRecorder(path, audioSet);

  // audioRecorderPlayer.addRecordBackListener((e) => {

  //   return ({
  //     recordSecs: e.currentPosition,
  //     recordTime: audioRecorderPlayer.mmssss(
  //       Math.floor(e.currentPosition),
  //     ),
  //   });

  // });


  console.log(`uri: ${uri}`);
  console.log(`${uri}`);



function updateStar(newValue) {
  console.log(newValue);
  navigation.setParams({ star: newValue });
  //nova rota para api

  setStar(!star);
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    dateDesc: 'ontem',
    lastUpdated: 'Evolução Aplicada',
    star: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    dateDesc: '10 abril',
    lastUpdated: 'Prontuário Criado',
    star: true,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false,
  },
];

return (
  <>
    <Container>
      <Header>
        <Logo />
      </Header>
      <Tag>
        <Touch onPress={() => navigation.navigate('App')}>
          <Icon name="navigate-before" size={30} color="#fff" />
        </Touch>
        <ImagePacient
          border="rgba(255,255,255,1)"
          navigation={navigation}
          route={'MR'}
        />
        <TagName>{data.name}</TagName>
        <Touch onPress={() => updateStar(!data.star)}>
          <Icon name={star ? 'star' : 'star-border'} size={30} color="#fff" />
        </Touch>
      </Tag>
    </Container>
    <Card>
      <SafeAreaView>
        <ScrollView>
          <Group>Condições Iníciais</Group>

          {DATA.map((item, index) => (
            <Play key={(index * -1).toString()} />
          ))}
          <Group>Evolução</Group>
          {DATA.map((item, index) => (
            <Play key={index.toString()} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Card>
  </>
);
}

export default MedicalRecord;
