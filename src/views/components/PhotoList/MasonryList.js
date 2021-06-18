import React, {useEffect} from 'react'
import styled from 'styled-components';
import PhotoItem from "../Items/PhotoItem";
import {composePhotosGroups} from "../../../lib/common";
import {useDispatch} from "react-redux";
import {Action} from "../../../redux/photos/redux";

const MasonryList = ({data}) => {

    const photoGroups = composePhotosGroups(data);
    const dispatch = useDispatch();

    const  openPhotoPopup = (id) => {
        dispatch(Action.Creators.openPhotoPopup(id))
        window.history.pushState({}, null,`/photos/${id}`);
    };


    return (
        <Container>
            <Row>
                {
                    photoGroups.map((photoGroups, groupIndex) => (
                        <Col key={groupIndex}>
                            {
                                photoGroups.map((item, index) => (
                                    <ItemContainer>
                                        <PhotoItem item={item}
                                                    key={index}
                                                   onClick={() => openPhotoPopup(item.id)}/>
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