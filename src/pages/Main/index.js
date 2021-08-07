import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from '~/components/Card';
import Logo from '~/components/Logo';
import ContactItem from '~/components/ContactItem';
import ImagePacient from '~/components/ImagePacient';
import Group from '~/components/Group';

import {List, Header, Highlight} from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    dateDesc: 'ontem',
    lastUpdated: 'Evolução Aplicada',
    star: true
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    dateDesc: '10 abril',
    lastUpdated: 'Prontuário Criado',
    star: true
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    dateDesc: '25 março',
    lastUpdated: 'Evolução Aplicada',
    star: false
  },
];

function Main({navigation}) {
  return (
    <>
      <Header>
        <Logo />
        <Icon name="person-add" size={30} color="#fff" />
      </Header>
      <Card>
        <Group>Favoritos</Group>
        <Highlight>
          <List
            horizontal
            data={DATA}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ImagePacient navigation={navigation} data={item} route={'Main'}/>
            )}
          />
        </Highlight>
        <Group border>Pacientes</Group>

        <List
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ContactItem navigation={navigation} data={item} />
          )}
        />
      </Card>
    </>
  );
}

export default Main;
