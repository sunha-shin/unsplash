import React, {useEffect} from 'react'
import styled from 'styled-components';
import Gnb from "../components/Header/Gnb";
import TopicLnb from "../components/Header/TopicLnb";
import {useDispatch} from "react-redux";
import {Action as TopicsAction} from "../../redux/topics/redux";
import {CLIENT_ID} from "../../constants";
import {Route} from 'react-router-dom';
import SearchLnb from "../components/Header/SearchLnb";

const HeaderContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getTopics()
    }, [])

    const getTopics = () => {
        dispatch(TopicsAction.Creators.getTopics({
            client_id: CLIENT_ID,
            per_page: 30
        }))
    };

    return (
        <Container>
            <Gnb/>
            <Route exact path={['/', '/topics/:slug']} component={TopicLnb}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default HeaderContainer;