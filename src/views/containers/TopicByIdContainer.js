import React, {useEffect} from 'react'
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {Action as TopicsAction} from "../../redux/topics/redux";
import {withRouter} from 'react-router-dom';
import TopicDetail from "../components/Topics/TopicDetail";
import {CLIENT_ID} from "../../constants";

const TopicByIdContainer = ({match}) => {
    const slug = match.params.slug;
    const dispatch = useDispatch();

    useEffect(() => {
        getTopicById();
    }, [slug])

    const getTopicById = () => {
        dispatch(TopicsAction.Creators.getTopicById(slug, {
            client_id: CLIENT_ID
        }))
    }


    return (
        <Container>
            <TopicDetail/>
            {/*<MasonryList data={[]}/>*/}
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(TopicByIdContainer);