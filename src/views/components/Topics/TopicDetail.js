import React from 'react'
import styled from 'styled-components';
import {useSelector} from "react-redux";
import IosLoader from "../shared/Loader/IosLoader";
import StatusBox from "./StatusBox";
import {IconButton} from "../shared/Button/Button.Styled";

const TopicDetail = () => {

    const {id, title, description} = useSelector(state => state.topics?.topicById);
    const {total_photos, status, top_contributors, owners} = useSelector(state => state.topics?.topicById);

    if (!id) return <IosLoader/>

    return (
        <Container>
            <Main>
                <h1>{title}</h1>
                <Description dangerouslySetInnerHTML={{__html: description}}/>
            </Main>
            <Status>
                <StatusBox
                    total_photos={total_photos}
                    status={status}
                    top_contributors={top_contributors}
                    owners={owners}
                />
                <SubmitButton>
                    Submit to&nbsp;<span>{title}</span>
                </SubmitButton>
            </Status>
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 60px 12px 72px;
  margin: 0 auto;
`;

const Description = styled.div`
  font-size: 18px;
  margin: 16px 0;
  color: #111;
  line-height: 1.6;
  max-width: 620px;
`;

const Main = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;

  h1 {
    font-size: 46px;
    font-weight: bold;
  }
`;

const Status = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
`;

const SubmitButton = styled(IconButton)`
  margin: 20px auto;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  font-size: 15px;
  background: #111;
  border: none;
  color: #fff;

  span {
    font-weight: bold;
    text-transform: capitalize;
  }

`;
export default TopicDetail;