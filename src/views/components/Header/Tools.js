import React from 'react'
import styled from 'styled-components';
import {DefaultButton, IconButton} from "../Button/Button.Styled";
import {BarIcon} from "../../../lib/styled";


function Tools() {

    return (
        <Container>
            <ButtonSubmitAPhoto>Submit a photo</ButtonSubmitAPhoto>
            <BarIcon/>
            <ButtonLogin>Login</ButtonLogin>
            <ButtonJoinFree>Join free</ButtonJoinFree>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonSubmitAPhoto = styled(IconButton)`
  color: #767676;
  margin-right: 15px;
`;

const ButtonLogin = styled(DefaultButton)`
  color: #767676;
  &:hover {
    color: black;
  }  
`;

const ButtonJoinFree = styled(IconButton)`
  margin-left: 15px;
  border: none;
  background: #3CB46E;
  color: white;
`;

export default Tools;