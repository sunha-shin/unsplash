import React from 'react'
import styled from 'styled-components';
import {navigate} from "../../../../lib/history";

const Tags = ({data}) => {
    return (
        <Container>
            {
                data.map(({title}, index) => (
                    <Tag key={index} onClick={() => navigate(`/search/photos/${title}`)}>{title}</Tag>
                ))}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #767676;
  background: #eee;
  cursor: pointer;
  border-radius: 3px;
  margin: 8px 8px 0 0;
  padding: 0 10px;
  text-transform: capitalize;

  &:hover {
    color: #111;
    background: #e1e1e1;
  }
`;

export default Tags;