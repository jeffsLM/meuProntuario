import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Button, Platform, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Axios from 'axios';

import RNFetchBlob from 'rn-fetch-blob'
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import LottieView from 'lottie-react-native';

import Uploading from '~/assets/uploading.json'
import Recording from '~/assets/recording.json'

import Card from '~/components/Card';
import Logo from '~/components/Logo';
import ImagePacient from '~/components/ImagePacient';
import Group from '~/components/Group';
import Play from '~/components/Play';


import { Container, Header, Tag, TagName, Touch, List, ButtonAddContent, ButtonAdd, ModalContent, Choice, ChoiceText, RecordingContent } from './styles';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    dateDesc: 'ontem', path: 'track4.mp3',
    lastUpdated: 'Evolução Aplicada',
    star: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    dateDesc: '10 abril',
    path: 'track5.mp3',
    lastUpdated: 'Prontuário Criado',
    star: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    dateDesc: '10 abril',
    path: 'track5.mp3',
    lastUpdated: 'Prontuário Criado',
    star: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    dateDesc: '10 abril',
    path: 'track5.mp3',
    lastUpdated: 'Prontuário Criado',
    star: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    dateDesc: '10 abril',
    path: 'track5.mp3',
    lastUpdated: 'Prontuário Criado',
    star: true,
  },
];


function MedicalRecord({ route, navigation }) {
  const [data, setData] = useState(navigation.getParam('dataItem', 'NO-ID'));
  const [star, setStar] = useState(data.star);
  const [recordSecs, SetRecordSecs] = useState(0);
  const [recordTime, SetRecordTime] = useState(0);
  const [modalVisible, SetModalVisible] = useState(false);
  const [isAlredyRecording, SetAlredyRecording] = useState(false);
  const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

  function updateStar(newValue) {
    console.log(newValue);
    navigation.setParams({ star: newValue });
    //nova rota para api

    setStar(!star);
  }

  const onStopPress = async (e) => {

    await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();

  };
  const onBackScreenStopAll = async () => {

    onStopPress().then(async () => {

      navigation.navigate('App');
    }).catch(navigation.navigate('App'));
  };

  const onStartRecord = async () => {
    const dirs = RNFetchBlob.fs.dirs.DownloadDir;
    const name = "meuProntuario_record_" + Math.floor(Math.random() * 10000000000);
    const path = Platform.select({
      ios: `${dirs}/${name}.m4a`,
      android: `${dirs}/${name}.mp3`,
    });
    const result = await audioRecorderPlayer.startRecorder(path);
    audioRecorderPlayer.addRecordBackListener((e) => {
      SetRecordSecs(e.currentPosition)
      SetRecordTime(audioRecorderPlayer.mmssss(
        Math.floor(e.currentPosition)
      ));

      return;
    });

  };




  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    SetRecordSecs(0)
    console.log(result)
    uploadFIle(result);
  };

  const uploadFIle = async (local) => {

    const data = new FormData();

    data.append('avatar', {
      fileName: 'teste.mp3',
      uri: local,
      type: 'mp3',
    });
    data.append('patient_id',
      1
    );

    await Axios.post('http://192.168.0.135:3333/patientrecords', data) .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('error => ' + error);
    });
  }


  return (
    <>
      <Container>
        <Header>
          <Logo />
        </Header>
        <Tag>
          <Touch onPress={() => onBackScreenStopAll()}>
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <Group>Condições Iníciais</Group>
            {DATA.map((item, index) => (
              <Play key={(index * -1).toString()} dataItem={item} audioRecorderPlayer={audioRecorderPlayer} />
            ))}
            <Group>Evolução</Group>
            {DATA.map((item, index) => (
              <Play key={index.toString()} dataItem={item} audioRecorderPlayer={audioRecorderPlayer} />
            ))}
          </ScrollView>
        </SafeAreaView>

        <ButtonAddContent>
          <ButtonAdd>
            <Touch
              onPress={() => {
                SetModalVisible(!modalVisible);
              }}>
              <Icon size={40} color={'#fff'} name={'graphic-eq'} />
            </Touch>
          </ButtonAdd>

        </ButtonAddContent>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            SetModalVisible(!modalVisible);
          }}
        >
          <ModalContent onPress={() => {
            SetModalVisible(!modalVisible);
            onStopRecord();
          }}>
            {!isAlredyRecording ? (<>
              <Choice onPress={() => {
                SetAlredyRecording(!isAlredyRecording);
                onStartRecord()
              }}
                color={"#417E6B"}
              >
                <ChoiceText>
                  Novo atendimento
                </ChoiceText>
                <Icon name={'add-comment'} size={40} color="#fff" />
              </Choice>
              <Choice onPress={() => {
                SetAlredyRecording(!isAlredyRecording);
                onStartRecord()
              }} color={"#0060C1"}>
                <ChoiceText>
                  Continuar
                </ChoiceText>
                <Icon name={'mic'} size={40} color="#fff" />
              </Choice>
              <Choice onPress={() => {
                SetModalVisible(!modalVisible);
                navigation.navigate('App');
              }} color={"#6B2D2D"}>
                <ChoiceText>
                  Finalizar
                </ChoiceText>
                <Icon name={'stop-circle'} size={20} color="#fff" />
              </Choice>
            </>) : (
              <>
                <ChoiceText style={styles.Choice}>
                  {audioRecorderPlayer.mmssss(Math.floor(recordSecs))}
                </ChoiceText>
                <LottieView
                  loop={true}
                  autoPlay
                  source={Recording}
                />
                <ButtonAddContent>
                  <ButtonAdd>
                    <Touch
                      onPress={() => {
                        SetAlredyRecording(!isAlredyRecording);
                        SetModalVisible(!modalVisible);
                        onStopRecord();
                      }}>
                      <Icon size={40} color={'#fff'} name={'stop'} />
                    </Touch>
                  </ButtonAdd>
                </ButtonAddContent>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
    </>
  );


}
const styles = StyleSheet.create({
  Choice: {
    marginLeft: 90
  }

});

export default MedicalRecord;
