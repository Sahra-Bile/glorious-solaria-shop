import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { useNavigate } from 'react-router-dom'

import HeroImage from "../../asserts/eco-woman2.png"
import { useRegisterUser } from '../../queries/user-queries'
import type { RegisterUserParams } from '../../api/api-service.types'

import { Agreement, Button, Container, Form, Title, StyledInput, FormWrapper } from './login-register.styles'

export function Register() {
  const [isAcknowledged, setIsAcknowledged] = useState(false)
  const { mutate: registerUser, isLoading } = useRegisterUser()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<RegisterUserParams>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleSubmitRegisterUser: SubmitHandler<RegisterUserParams> = (data) => {
    registerUser(
      { params: data },
      {
        onSuccess: () => {
          reset()
          navigate("/login")
        },
      },
    )
  }

  return (
    <Container backgroundimage={HeroImage}>
      <FormWrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form onSubmit={handleSubmit(handleSubmitRegisterUser)}>
          <StyledInput
            type="text"
            placeholder="First name"
            {...register('firstName', {
              required: 'first name is required',
            })}
          />
          <StyledInput
            type="text"
            placeholder="Last name"
            {...register('lastName', {
              required: 'last name is required',
            })}
          />
          <StyledInput
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'email is required',
            })}
          />
          <StyledInput
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'password is required',
            })}
          />
          <StyledInput
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword', {
              required: 'confirm password is required',
            })}
          />
          <Agreement>
            By registering for an account, I agree to the collection and use of my personal information as
            outlined in the PRIVACY POLICY
            <Checkbox color="default" onChange={() => setIsAcknowledged(!isAcknowledged)} />
          </Agreement>
          <Button type="submit" disabled={!isValid || !isAcknowledged}>
            {isLoading ? 'loading...' : 'CREATE'}
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  )
}
