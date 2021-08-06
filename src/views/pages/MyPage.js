import React from 'react'
import styled from 'styled-components';
import {IconButton} from "../components/shared/Button/Button.Styled";
import { useForm } from "react-hook-form";
import {authActions} from "../../redux/actionCreators";

const MyPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        authActions.editProfile(data);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <label htmlFor="username">user name</label>
                    <input
                        type="text"
                        id={'username'}
                        {...register("username")}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="">first name</label>
                    <input
                        type="text"
                        id={'first_name'}
                        {...register("first_name")}
                    />
                </FormGroup>
                <Button>edit</Button>
            </form>
        </Container>
    )
}

const Container = styled.div`

`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  label {
    display: block;
    width: 120px;
    text-align: right;
    color: #333;
    height: 40px;
    line-height: 40px;
    margin-right: 10px;
  }

  input {
    border: 0;
    height: 40px;
    padding: 8px;
    font-size: 14px;
    color: #333;
    display: block;
    width: 200px;
    border-bottom: 1px solid #d1d1d1;
    outline: 0;
  }
`;

const Button = styled(IconButton)`
    color: #111;
`;

export default MyPage;