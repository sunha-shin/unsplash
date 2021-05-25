import React from 'react'
import styled from 'styled-components';
import {LogoIcon} from "../../../icons";

const Logo = () => {
    return (
        <Container>
            <LogoIcon/>
            <Text>
                <span className="title">Unsplash</span>
                <span className="desc">Photos for everyone</span>
            </Text>
        </Container>
    )
}

const Container = styled.div`
  display: flex;;
`;

const Text = styled.div`
  margin-left: 10px;
    .title {
      font-size: 15px;
      color: #111;
      font-weight: bold;
      display: flex;
    }
  .desc {
    font-size: 13px;
    color: #111;
    font-weight: 400;
    margin-top: 3px;
  }
`;
export default Logo;