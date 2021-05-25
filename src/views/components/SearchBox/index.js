import React from 'react'
import styled from 'styled-components';
import {SearchIcon} from "../../../icons";

const SearchBox = () => {
    return (
        <Container>
            <Form>
                <Button>
                    <SearchIcon/>
                </Button>
                <label>
                    <input type="text"/>
                </label>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  flex:1;
`;

const Form = styled.div`
  height: 38px;
  background: #ddd;
  display: flex;
  align-items: center;
  border-radius: 19px;
  padding: 0 14px;
`;

const Button = styled.button`
    background: none;
    border:none;
  svg {
    width: 20px;
  }
`;

export default SearchBox;