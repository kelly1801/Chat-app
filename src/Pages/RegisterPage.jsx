import React from 'react';
import styled from "styled-components";

function RegisterPage(props) {
    return (
        <FormContainer>
        <FormWrapper>
<Logo>Lama Chat</Logo>
            <Title>Register</Title>

            <Form>
               <Input type='text' placeholder='display name'/>
                <Input type='email' placeholder='email'/>
                <Input type='password' placeholder='password'/>
                <Input type='file' />

<button>Sign up</button>
            </Form>

            <p>You do have an account? Login</p>
        </FormWrapper>
        </FormContainer>
    );
}

export default RegisterPage;

const FormContainer = styled.div`
background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FormWrapper = styled.div``
const Form = styled.form``
const Input = styled.input``
const Logo = styled.span``
const Title = styled.span``