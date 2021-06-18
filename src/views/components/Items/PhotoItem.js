import React from 'react'
import styled from 'styled-components';
import {useSelector} from "react-redux";

const PhotoItem = ({item, onClick}) => {

    const {photos, collections, users, related_searches} = useSelector(state => state.search);

    const thumbStyle = {
        paddingBottom: item.height / item.width * 100 + '%'
    };

    return (
        <Container onClick={onClick}>
            <Thumb style={thumbStyle}>
                <img src={item.urls.regular} alt=""/>
            </Thumb>
            <Desc>

            </Desc>
        </Container>
    )
}

const Container = styled.div`
  position: relative;

`;

const Thumb = styled.div`

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`

`;
export default PhotoItem;