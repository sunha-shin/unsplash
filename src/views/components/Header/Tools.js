import React from 'react'
import styled from 'styled-components';
import {DefaultButton, IconButton} from "../Button/Button.Styled";
import {BarIcon} from "../../../lib/styled";
import qs from 'qs';
import {CLIENT_ID} from "../../../constants";
import {useSelector} from "react-redux";
import UserInfo from "../UserInfo";
import {authActions} from "../../../redux/actionCreators";

function Tools() {

    const user = useSelector(state => state.auth.user);

    return (
        <Container>
            <ButtonSubmitAPhoto>Submit a photo</ButtonSubmitAPhoto>
            <BarIcon/>
            {
                user ? <UserInfo user={user}/> :
                    <>
                        <ButtonLogin>
                            <a href={`https://unsplash.com/oauth/authorize?${qs.stringify({
                                client_id: CLIENT_ID,
                                redirect_uri: 'http://localhost:3000/auth',
                                response_type: 'code',
                                scope: 'public read_user write_user'
                            })}`}>
                                Login
                            </a>
                        </ButtonLogin>
                        <ButtonJoinFree>Join free</ButtonJoinFree>
                    </>
            }
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