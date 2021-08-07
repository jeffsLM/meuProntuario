import React from 'react';
import {View} from 'react-native';

import {Container, Text} from './styles';

const Group = ({children,border}) => {
  return (
    <Container isContact={border}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Group;
