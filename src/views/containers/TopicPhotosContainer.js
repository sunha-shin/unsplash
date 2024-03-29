import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import TopicPhotos from "../components/Topics/TopicPhotos";
import {topicsActions} from "../../redux/actionCreators";
import {withRouter} from "react-router-dom";

const TopicPhotosContainer = ({match}) => {

    const [page, setPage] = useState(1);
    const {slug} = match.params;

    const next = () => {
        setPage(p => p + 1);
    };

    useEffect(() => {
        topicsActions.getTopicPhotos(slug, {page})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    // useEffect(() => {
    //     topicsActions.getTopicPhotos(slug, {page})
    // }, [slug])

    return (
        <Container>
            <TopicPhotos next={next}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(TopicPhotosContainer);