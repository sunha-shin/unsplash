import React, {useEffect} from 'react'
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import qs from "qs";
import {CLIENT_ID, SECRET_KEY} from "../../constants";
import axios from "axios";
import {navigate} from "../../lib/history";
import {authActions} from "../../redux/actionCreators";
import {LocalStorage} from "../../lib/localStorage";

const Auth = () => {

    const location = useLocation();
    const params = qs.parse(location.search, {ignoreQueryPrefix: true});

    useEffect(() => {
        getToken();
    }, [])

    const getToken = async () => {
        try {
            const config = {
                method: 'post',
                url: 'https://unsplash.com/oauth/token',
                data: {
                    client_id: CLIENT_ID,
                    client_secret: SECRET_KEY,
                    redirect_uri: 'http://localhost:3000/auth',
                    code: params.code,
                    grant_type: 'authorization_code'
                },
            }
            const result = await axios(config);

            const token = result.data.access_token;

            LocalStorage.accessToken.set(token);
            authActions.setAccessToken(token);
            authActions.getUserProfile();

            navigate('/')
        } catch (err) {
            console.log('@@ err', err);
        }
    };

    return (
        <Container>
            auth page
        </Container>
    )
}

const Container = styled.div`

`;

export default Auth;