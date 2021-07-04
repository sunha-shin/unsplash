import React from 'react'
import styled from 'styled-components';
import PhotoItem from "../Items/PhotoItem";
import {composePhotosGroups} from "../../../lib/common";
import {useDispatch} from "react-redux";
import {Action} from "../../../redux/photos/redux";
import IosLoader from "../Loader/IosLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const MasonryList = ({data = [], next, hasMore = true}) => {

    const photoGroups = composePhotosGroups(data);
    const dispatch = useDispatch();

    const openPhotoPopup = (id) => {
        dispatch(Action.Creators.openPhotoPopup(id));
        window.history.pushState({}, null, `/photos/${id}`);
    };

    return (
        <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={next}
            hasMore={!!next && hasMore}
            loader={<IosLoader/>}
        >
            <Container>
                <Row>
                    {
                        photoGroups.map((photoGroups, groupIndex) => (
                            <Col key={groupIndex}>
                                {
                                    photoGroups.map((item) => (
                                        <ItemContainer key={item.id}>
                                            <PhotoItem item={item}
                                                       onClick={() => openPhotoPopup(item.id)}/>
                                        </ItemContainer>
                                    ))
                                }
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