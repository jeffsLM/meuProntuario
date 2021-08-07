import React from 'react';

import {
  Container,
  Left,
  Midle,
  UpText,
  DownText,
  Right,
  DateInfo,
  PreviewImage
} from './styles';

const ContactItem = ({navigation,data}) => {


  return (
    <Container onPress={() => navigation.navigate('MR',{dataItem: data})}>
      <Left>
        <PreviewImage/>
      </Left>
      <Midle>
        <UpText>{data.name}</UpText>

        <DownText>{data.lastUpdated}</DownText>
      </Midle>
      <Right>
        <DateInfo>{data.dateDesc}</DateInfo>
      </Right>
    </Container>
  );
};

export default ContactItem;
