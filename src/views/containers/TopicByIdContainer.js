import React, {useEffect} from 'react'
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action as TopicsAction} from "../../redux/topics/redux";
import {withRouter} from 'react-router-dom';
import TopicDetail from "../components/Topics/TopicDetail";
import MasonryList from "../components/shared/PhotoList/MasonryList";
import {ContentContainer} from "../components/shared/Layout/Layout.Styled";
import TopicPhotos from "../components/Topics/TopicPhotos";
import TopicPhotosContainer from "./TopicPhotosContainer";

const TopicByIdContainer = ({match}) => {
    const slug = match.params.slug;
    const dispatch = useDispatch();

    useEffect(() => {
        getTopicById();
    }, [slug])

    const getTopicById = () => {
        dispatch(TopicsAction.Creators.getTopicById(slug))
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