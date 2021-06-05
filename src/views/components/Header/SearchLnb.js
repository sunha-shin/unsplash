import React from 'react'
import styled from 'styled-components';
import {SearchIcon} from "../../../icons";
import {navigate} from "../../../lib/history";

const SearchLnb = ({match}) => {

    const {query, category} = match.params;

    const menuData = [['photos', <SearchIcon/>], ['collections', <SearchIcon/>], ['users', <SearchIcon/>]]
    //

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
            {
                menus.map((item, index) => (
                    <NavItem key={index} onClick={() => navigate(item.to)}>
                            {item.icon}
                            {item.name}
                    </NavItem>
                ))
            }
        </Container>
    )
}

const Container = styled.div`

`;

const NavItem = styled.div`

`;

export default SearchLnb;
    
