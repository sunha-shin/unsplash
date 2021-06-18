import React, {useState} from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {SearchIcon} from "../../../icons";
import cn from "classnames";

function SearchBox({shape}) {

    const [value, setValue] = useState('');
    const history = useHistory();

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/photos/${value}`);
    }

    return (
        <Container className={cn("SearchBox", shape)}>
            <Form onSubmit={onSubmit}>
                <Button>
                    <SearchIcon/>
                </Button>
                <Label>
                    <Input type="text"
                           placeholder={"Search free high-resolution photos"}
                           onChange={onChange}
                    />
                </Label>
            </Form>
        </Container>
    )
}


const Container = styled.div`
  flex: 1;
  margin-right: 50px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 0 14px;

  .round & {
    height: 38px;
    background: #eee;
    border-radius: 19px;
  }

  .square & {
    height: 54px;
    background: #fff;
    border-radius: 6px;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;

  svg {
    .round & {
      width: 20px;
    }

    .square & {
      width: 24px;
    }
  }
`;

const Label = styled.label`
  display: block;
  flex: 1;
  height: 100%;
`;

const Input = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: none;
  background: none;
  padding: 0 8px;

  .round & {
    font-size: 14px;
  }

  .square & {
    font-size: 15px;

  }

  &:focus {
    outline: 0;
  }
`;

export default SearchBox;