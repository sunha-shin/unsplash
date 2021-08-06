import React from 'react'
import styled from 'styled-components';
import ScrollMenu from "../shared/ScrollMenu";
import {navigate} from "../../../lib/history";

const SearchHead = ({query, related_searches}) => {

    const renderItem = ({title}) => (
        <NavItem onClick={() => navigate(`/search/photos/${title}`)}>
            {title}
        </NavItem>);

    return (
        <Container>
            <Title>{query}</Title>
            <ScrollMenu data={related_searches}
                        renderItem={renderItem}
                        style={{
                            padding: 0
                        }}
            />
        </Container>
    )
}

const Container = styled.div`
  padding: 60px 0 72px;
`;

const Title = styled.h1`
  font-size: 46px;
  font-weight: bold;
  color: #111;
  text-transform: capitalize;
  margin-bottom: 16px;
`;

const NavItem = styled.div`
  width: 143px;
  padding: 13px;

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  flex-shrink: 0;
  border: 1px solid #d1d1d1;
  color: #767676;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;

  transition: 0.3s;
  text-transform: capitalize;

  &:hover {
    color: #111;
    border: 1px solid #767676;
  }

  & + & {
    margin-left: 8px;
  }
`;

export default SearchHead;