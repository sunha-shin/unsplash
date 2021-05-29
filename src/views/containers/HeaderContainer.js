import React, {useEffect} from 'react'
import styled from 'styled-components';
import Gnb from "../components/Header/Gnb";
import TopicLnb from "../components/Header/TopicLnb";
import {useDispatch, useSelector} from "react-redux";
import {Action as TopicsAction} from "../../redux/topics/redux";
import {CLIENT_ID} from "../../constants";

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const topics = useSelector(state => state.topics);

    useEffect(() => {
        getTopics()
    }, [])

    const getTopics = () => {
        dispatch(TopicsAction.Creators.getTopics({
            client_id:CLIENT_ID,
            per_page:30
        }))

    };

    return (
        <Container>
            <Gnb/>
            <TopicLnb/>
        </Container>
    )
}

const Container = styled.div`

`;

export default HeaderContainer;