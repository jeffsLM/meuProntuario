import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #0060c1;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  padding: 10px;
  margin: 10px;
  border: 2px;
  border-color: ${prop => prop.border ? '"'+(prop.border).toString()+'"'  : "#707070"};
`;
