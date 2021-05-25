import React from 'react'
import styled from 'styled-components';
import Logo from "./Logo";
import SearchBox from "../SearchBox";
import Nav from "./Nav";
import Tools from "./Tools";

const Header = () => {
    return (
        <Container>
            <Logo/>
            <SearchBox/>
            <Nav/>
            <Tools/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  padding: 0 28px;
  background: #fff;
`;


export default Header;