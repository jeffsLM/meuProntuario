import React from 'react';
import {View} from 'react-native';

import {Container, DownText, UpText} from './styles';

const Logo = () => {
  return (
    <Container>
      <UpText >Meus</UpText>
      <DownText>Prontuários</DownText>
    </Container>
  );
};

export default Logo;
