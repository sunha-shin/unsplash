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
  margin: 0 -12px;
`;

const Col = styled.div`
  padding: 12px;
  width: 33.3333%;
  margin-bottom: 24px;
`;

export default GridList;