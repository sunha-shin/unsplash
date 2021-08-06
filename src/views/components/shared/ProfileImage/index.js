import React from 'react'
import styled from 'styled-components';

const ProfileImage = ({size, url}) => {
    return (
        <Container size={size} url={url}>
            <img src={url} alt=""/>
        </Container>
    )
}

const Container = styled.div`
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border:1px solid #d1d1d1
  }
`;

export default ProfileImage;