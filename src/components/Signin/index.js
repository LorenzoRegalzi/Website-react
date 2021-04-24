import React from 'react'
import { Container, FormContent, FormWrap, Icon, FormH1, FormLabel, FormInput, FormButton, Form, Text } from './SigninElements';

const Signin = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">Website</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required/>
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required/>
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin;