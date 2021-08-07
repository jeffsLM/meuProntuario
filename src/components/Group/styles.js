import styled from 'styled-components/native';

export const Container = styled.View`
 border-bottom-width: ${prop => (!prop.isContact ? '0px' :'1px')};
 border-bottom-color: #adb5bd;
 margin-top: 5px;
 margin-bottom: 5px;
`;

export const Text = styled.Text`
font-size: 14px;
color: #adb5bd;
`;
