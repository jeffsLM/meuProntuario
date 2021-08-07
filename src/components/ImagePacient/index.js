import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


import {Container} from '~/components/ImagePacient/styles';

const ImagePacient = ({navigation,border,route}) => {
  return (
    <Container  border={border} onPress={()=> navigation.navigate(route)}>
      <Icon name="person" size={35} color="#fff" />
    </Container>
  );
};

export default ImagePacient;
