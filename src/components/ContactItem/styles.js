import styled from 'styled-components/native';
import ImagePacient from '../../components/ImagePacient'

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;

  border-color: rgba(0,0,0,0.1);
`;
export const Left = styled.View``;

export const Midle = styled.View`
  flex-direction: column;
  flex: 1;

  /* background-color: red; */
`;
export const UpText = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
export const DownText = styled.Text`
  font-size: 15px;

  /* font-weight: bold; */
`;
export const Right = styled.View`
  align-items: center;
  justify-content: center;
  /* background-color: blue; */
`;
export const DateInfo = styled.Text``;



export const PreviewImage = styled(ImagePacient)`

`;
