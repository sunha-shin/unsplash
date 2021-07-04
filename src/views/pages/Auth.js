import React, {useEffect} from 'react'
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import qs from 'qs';
import {CLIENT_ID, SECRET_KEY} from "../../constants";
import axios from "axios";
import {navigate} from "../../lib/history";

const Auth = () => {

    const location = useLocation();
    const params = qs.parse(location.search, {ignoreQueryPrefix: true});
    console.log("@@ params", params)

    useEffect(() => {
        getToken();
    }, [])

    const getToken = async () => {
        const config = {
            method:'post',
            url:'https://unsplash.com/oauth/token',
            data: {
                client_id:CLIENT_ID,
                client_secret:SECRET_KEY,
                redirect_uri:'http://localhost:3000/auth',
                code:params.code,
                grant_type:'authorization_code'
            },
        }
        const result = await axios(config);

        window.localStorage.setItem('access_token', result.data.access_token);
        console.log("@@ result", result);
        navigate('/')
    };

    return (
        <Container>
            Auth
        </Container>
    )
}

const Container = styled.div`

`;

export default Auth;