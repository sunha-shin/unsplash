import React from 'react'
import styled from 'styled-components';

const ScrollMenu = ({
                        data, renderItem = () => {
    }
                    }) => {
    return (
        <Container>
            <ButtonLeft></ButtonLeft>
            <Track>
                {
                    data.map((item, index) => renderItem(item, index))
                }
            </Track>
            <ButtonRight></ButtonRight>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const ButtonLeft = styled.div`

`;

const ButtonRight = styled.div`

`;

export default ScrollMenu;