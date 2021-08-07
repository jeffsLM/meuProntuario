import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
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

export const CurrentPlay = styled(Animated.View)`
  background-color: #0060C1;
  height: 5px;
  margin-bottom: 2px;
  border-radius: 100px;
`;

export const Duration = styled.Text``;
