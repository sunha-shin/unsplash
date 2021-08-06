import React from 'react'
import styled from 'styled-components';
import IosLoader from "../Loader/IosLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const GridList = ({data, renderItem, next, hasMore=true}) => {
    return (
        <InfiniteScroll
            dataLength={data.length}
            next={next}
            hasMore={!!next && hasMore}
            loader={<IosLoader/>}
        >
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
        </InfiniteScroll>
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