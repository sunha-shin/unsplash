import React, {useEffect} from 'react'
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {Action as TopicsAction} from "../../redux/topics/redux";
import {withRouter} from 'react-router-dom';
import TopicDetail from "../components/Topics/TopicDetail";
import {ContentContainer} from "../components/shared/Layout/Layout.Styled";
import TopicPhotosContainer from "./TopicPhotosContainer";
import {topicsActions} from "../../redux/actionCreators";

const TopicByIdContainer = ({match}) => {
    const slug = match.params.slug;

    useEffect(() => {
        getTopicById();
    }, [slug])

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