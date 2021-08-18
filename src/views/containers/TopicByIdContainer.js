import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {Action as TopicsAction} from "../../redux/topics/redux";
import {withRouter} from 'react-router-dom';
import TopicDetail from "../components/Topics/TopicDetail";
import {ContentContainer} from "../components/shared/Layout/Layout.Styled";
import TopicPhotosContainer from "./TopicPhotosContainer";
import {topicsActions} from "../../redux/actionCreators";
import TopicPhotos from "../components/Topics/TopicPhotos";

const TopicByIdContainer = ({match}) => {
    const slug = match.params.slug;
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTopicById();
    }, [slug])

    useEffect(() => {
        topicsActions.getTopicPhotos(slug, {page})
    }, [page])

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