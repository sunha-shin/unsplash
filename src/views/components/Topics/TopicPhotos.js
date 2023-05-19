import React from 'react'
import styled from 'styled-components';
import MasonryList from "../shared/PhotoList/MasonryList";
import {useSelector} from "react-redux";
import _ from "lodash";
import IosLoader from "../shared/Loader/IosLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import {withRouter} from "react-router-dom";

const TopicPhotos = ({next}) => {

    const topicPhotos = useSelector(state => state.topics?.photos);

    if (_.isEmpty(topicPhotos)) return <IosLoader/>

    return (
        <Container>
            <InfiniteScroll
                dataLength={topicPhotos.length}
                next={next}
                hasMore={true}
                loader={<IosLoader/>}>
                <MasonryList data={topicPhotos}/>
            </InfiniteScroll>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(TopicPhotos);