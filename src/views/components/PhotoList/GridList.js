import React from 'react'
import styled from 'styled-components';

const GridList = ({data, renderItem}) => {
    return (
        <Container>
            <Row>
                {
                    data.map((item, i) => (
                        <Col key={i}>
                            {renderItem(item)}
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  padding: 10px;
  width: 33.3333%;
`;

export default GridList;