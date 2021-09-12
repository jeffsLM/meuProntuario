import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View``;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 30px 0px 30px;
`;
export const Tag = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 30px 0px 30px;
`;
export const TagName = styled.Text`
  flex: 1;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;


export const Touch = styled.TouchableOpacity``;

export const List = styled.FlatList`
  padding: 5px;
`;


export const Container_pay = styled.View`
  display: flex;
  flex-direction: row;
  width: 70%;
  border: 1px solid rgba(0, 0, 0, 0.1);

  border-radius: 10px;
  margin: 5px;
  margin-bottom: 7px;
`;

export const Left = styled.TouchableOpacity``;

export const Right = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 7px;
`;

export const ContentPlaying = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const LinePlay = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const CurrentPlay = styled.View`
  background-color: #0060C1;
  height: 5px;
  margin-bottom: 2px;
  border-radius: 100px;
`;

export const Duration = styled.Text``;

export const ButtonAddContent = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 20px;
  margin-bottom: 15%;
  margin-right: 1%;


`;
export const ButtonAdd = styled.View`
  position: absolute;
  border-radius: 55px;
  background: #0b53b7;
  padding:15px;

  align-items: center;
  justify-content: center;
  border-color: rgba(255, 255, 255, 1);
  border-width: 2px;

  shadowColor: #000;
  shadowOffset: {
    width: 0,
    height: 2,
  };
  shadowOpacity: 0.23;
  shadowRadius: 2.62;

  elevation: 4;
`;


export const ModalContent = styled.TouchableOpacity`
  background-color: rgba(0,0,0,0.3);
  flex: 1;
  justify-content: flex-end;
  align-items: center;


`;
export const Choice = styled.TouchableOpacity`
    background-color: ${prop => prop.color};
    width:29%;
    height:15%;
    align-items: center;

    justify-content: center;
    border-radius: 100px;
    margin:15px;

`;

export const ChoiceText = styled.Text`
  font-size:20px;
  color: #fff;
  text-align:center;

`;
export const RecordingContent = styled.View`
background-color: rgba(0,0,0,1.3);
`;

