import React from 'react'
import styled from 'styled-components';
import {useSelector} from "react-redux";

const TopicDetail = () => {

    const topicById = useSelector(state => state.topics.topicById);

    if (!topicById.id) return "...loading"

    return (
        <Container>
            <h1>{topicById.title}</h1>
            <Description dangerouslySetInnerHTML={{__html: topicById.description}}/>
        </Container>
    )
}

const Container = styled.div`

`;

const Description = styled.div`
  p {
    font-size: 18px;
    margin: 16px 0;
    color: #111;
    line-height: 1.6;    
  }
`;
export default TopicDetail;