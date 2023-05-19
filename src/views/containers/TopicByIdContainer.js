import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import TopicDetail from "../components/Topics/TopicDetail";
import {ContentContainer} from "../components/shared/Layout/Layout.Styled";
import TopicPhotosContainer from "./TopicPhotosContainer";
import {topicsActions} from "../../redux/actionCreators";

const TopicByIdContainer = ({match}) => {
    const slug = match.params.slug;
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTopicById();
    // eslint-disable-next-line no-use-before-define
    }, [slug])

    useEffect(() => {
        topicsActions.getTopicPhotos(slug, {page})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getTopicById = () => {
        topicsActions.getTopicById(slug);
    }


    return (
        <Container>
            <ContentContainer>
                <TopicDetail/>
                <TopicPhotosContainer/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(TopicByIdContainer);