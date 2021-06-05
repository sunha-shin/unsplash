import React from 'react'
import styled from 'styled-components';

const PhotoItem = ({item}) => {
    return (
        <Container>
            <Thumb>
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