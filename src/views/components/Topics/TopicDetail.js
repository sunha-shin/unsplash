import React from 'react'
import styled from 'styled-components';
import {useSelector} from "react-redux";

const TopicDetail = () => {

    const topicById = useSelector(state => state.topics.topicById);
    
    if (!topicById.id) return "...loading"

    return (
        <Container>
            <h1>{topicById.title}</h1>
            <p>{topicById.description}</p>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicDetail;