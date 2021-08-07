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
