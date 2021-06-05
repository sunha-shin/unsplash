import React from 'react'
import styled from 'styled-components';
import PhotoItem from "../Items/PhotoItem";

const MasonryList = ({data}) => {

    const composePhotosGroups = (data) => {
        const groups = [[], [], []];
        const groupsHeight = [0, 0, 0];

        for (let i = 0; i < data.length; i++) {
            const ratioHeight = data[i].height / data[i].width;
            const minHeight = Math.min(...groupsHeight);
            const minHeightIndex = groupsHeight.indexOf(minHeight);
            groups[minHeightIndex].push(data[i]);
            groupsHeight[minHeightIndex] = groupsHeight[minHeightIndex] + ratioHeight;
        }

        return groups;
    };

    const photoGroups = composePhotosGroups(data);


    return (
        <Container>
            <Row>
                {
                    photoGroups.map((photoGroups, groupIndex) => (
                        <Col>
                            {
                                photoGroups.map((item, index) => (
                                    <ItemContainer>
                                        <PhotoItem item={item}/>
                                    </ItemContainer>
                                ))
                            }
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

const ItemContainer = styled.div`
  padding: 10px 0;
`;

export default MasonryList;