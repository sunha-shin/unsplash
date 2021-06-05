import React from 'react'
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {useLocation} from 'react-router-dom';
import ScrollMenu from "../ScrollMenu";
import {navigate} from "../../../lib/history";
import cn from 'classnames'

// Topic local navigation bar
const TopicLnb = () => {

    const location = useLocation();
    const list = useSelector(state => state.topics.list);

    const renderItem = (item, index) => {
        const url = `/topics/${item.slug}`;
        return (
            <NavItem key={index}
                     className={cn("NavItem", {isActive: location.pathname === url})}
                     onClick={() => navigate(url)}
            >{item.title}</NavItem>
        )
    }

    return (
        <Container>
            <Nav>
                <NavItem onClick={() => navigate('/')}
                         className={cn("NavItem", {isActive: location.pathname === '/'})}
                >Editorial</NavItem>
                <ScrollMenu data={list} renderItem={renderItem}/>
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
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap; //줄바꿈 방지
  margin: 0 12px;
  height: 56px;
  color: #767676;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover,
  &.isActive {
    color: #111;
  }
  
  &.isActive {
    border-bottom: 2px solid #111;
  }
`;
export default TopicLnb;