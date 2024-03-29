import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useLogIn } from '../../queries/user-queries'
import type { LogInParams } from '../../api/api-service.types'
import HeroImage from '../../asserts/eco-woman.png'
import { useCartItems } from '../../context/cart-context'

import {
  Button,
  Container,
  Form,
  FormWrapper,
  StyledInput,
  StyledLink,
  Title,
  Label,
} from './login-register.styles'

export function Login() {
  const { mutate: logIn, isLoading, error } = useLogIn()
  const { setIsAuthenticated } = useCartItems()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<LogInParams>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmitLogIn: SubmitHandler<LogInParams> = (data) => {
    logIn(
      { params: data },
      {
        onSuccess: () => {
          reset()
          setIsAuthenticated(true)
          const lastPage = localStorage.getItem('lastVisitedPage') || '/defaultPage'
          navigate(lastPage, { replace: true })
        },
      },
    )
  }

  const errorMessage = error?.response?.data as string

  return (
    <Container backgroundimage={HeroImage}>
      <FormWrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit(handleSubmitLogIn)}>
          <Label>Username</Label>
          <StyledInput
            type="email"
            placeholder="sara.bile@gmail.com"
            {...register('email', {
              required: 'email is required',
            })}
          />
          <Label>Password</Label>
          <StyledInput
            type="password"
            placeholder="************"
            {...register('password', {
              required: 'password is required',
            })}
          />
          <Button type="submit" disabled={!isValid}>
            {isLoading ? 'loading...' : 'LOGIN'}
          </Button>
          <StyledLink to={'http://localhost:9000/auth/google'}>Log in with your Google account</StyledLink>
          <StyledLink to={'/forget-password'}>Forgot password?</StyledLink>
          <StyledLink to={'/register'}>Create new account</StyledLink>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </Form>
      </FormWrapper>
    </Container>
  )
}
