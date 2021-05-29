import React from 'react'
import styled from 'styled-components';
import {useSelector} from "react-redux";
import ScrollMenu from "../ScrollMenu";

// Topic local navigation bar
const TopicLnb = () => {

    const list = useSelector(state => state.topics.list);
    const renderItem = (item, index) => <NavItem key={index}>{item.title}</NavItem>

    return (
        <Container>
            <Nav>
                <NavItem>Editorial</NavItem>
                <ScrollMenu data={list} renderItem={renderItem}/>
                {
                    list.map((item) => <h1>{item.title}</h1>)
                }
                <NavItem>View all</NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.div`

`;

const Nav = styled.div`
  display: flex;

`;

const NavItem = styled.div`
  white-space: normal;
  height: 56px;
  color: #767676;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;

  &:hover,
  &.isActive {
    color: #111;

  }
`;
export default TopicLnb;