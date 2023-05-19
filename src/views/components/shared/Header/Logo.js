import React from 'react'
import styled from 'styled-components';
import {LogoIcon} from "../../../../icons";
import {navigate} from "../../../../lib/history";

function Logo() {

    return (
        <Container onClick={() => navigate('/')}>
            <LogoIcon/>
            <Text>
                <span className="title">Sunha's Project</span>
                <span className="desc">Unsplash</span>
            </Text>
        </Container>
    )
}


const Container = styled.div`
    display:flex;
    margin-right: 16px;
`;

const Text = styled.h1`
    margin-left: 10px;
    .title {
        font-size: 15px;
        color:#111;
        font-weight:bold;
        display:block;
    }
    .desc {
        font-size: 13px;
        color:#111;
        font-weight: 400;
        margin-top: 3px;
    }
`;

export default Logo;