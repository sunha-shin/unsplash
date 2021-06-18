import React from 'react'
import styled from 'styled-components';
import {CollectionsIcon, PhotosIcon, UsersIcon} from "../../../icons";
import {Link, withRouter} from "react-router-dom";
import cn from 'classnames'

const SearchLnb = ({match}) => {

    const {query, category} = match.params;
    const menuData = [['photos', <PhotosIcon/>], ['collections', <CollectionsIcon/>], ['users', <UsersIcon/>]];

    const getMenus = (data) => {
        return data.map(item => ({
            name: item[0],
            to: `/search/${item[0]}/${query}`,
            isActive: item[0] === category,
            icon: item[1]
        }))
    }

    const menus = getMenus(menuData);

    return (

        <Container>
            <Nav>
                {
                    menus.map(({name, to, isActive, icon}, index) => (
                        <NavItem key={index}>
                            <Link className={cn({isActive})} to={to}>
                                {icon}
                                {name}
                            </Link>
                        </NavItem>
                    ))
                }
            </Nav>
            <Filter>

            </Filter>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: inset 0 -1px 0 #d1d1d1;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  & + & {
    margin-left: 32px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    transition: 0.3s;

    &:hover,
    &.isActive {
      color: #111;     
      svg {
        fill:#111
      }
    }

    &.isActive {
      box-shadow: inset 0 -2px 0 #000;
    }
    
    svg {
      width: 18px;
      height: 18px;
      margin-right: 8px;
      fill: #d1d1d1;
      transition: 0.3s;
    } 
  }
`;

const Filter = styled.div`

`;
export default withRouter(SearchLnb);