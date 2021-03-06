import React from 'react'
import styled from 'styled-components';
import {ViewMoreIcon} from "../../../../icons";
import LocalData from "../../../../data";

function Nav() {

    return (
        <Container>
            {
                LocalData.navData.map((item) => (
                    <NavItem key={item}>{item}</NavItem>
                ))
            }
            <NavItem><ViewMoreIcon/></NavItem>

        </Container>
    )
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 36px;

  h1 {
    display: flex;
    align-items: center;
  }
`;

const NavItem = styled.div`
  padding: 20px 12px;
  cursor: pointer;
  color: #767676;
  font-size: 14px;
  &:hover {
    color: #111;
  }
  
  svg {
    fill: #767676;    
  }
`;

export default Nav;