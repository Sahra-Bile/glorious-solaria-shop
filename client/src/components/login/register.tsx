import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

import Image from '../../asserts/eco-woman2.png'
import { useRegisterUser } from '../../queries/user-queries'
import type { RegisterUserParams } from '../../api/api-service.types'
import { MediaQueries } from '../../utils/style-constants'

import { Agreement, Container, Title, StyledInput } from './login-register.styles'

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  padding: 20px;
`
export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 30px;
  background-color: #8daaa3;
  border-radius: 20px;
  box-shadow: 0 0 20px 0 rgba(238, 230, 230, 0.845);
  @media ${MediaQueries.mdUp} {
    width: 60%;
  }
  @media ${MediaQueries.lgUp} {
    width: 60%;
  }
`

export const Button = styled.button`
  border: none;
  outline: 0;
  padding: 20px;
  color: white;
  background-color: #1d6453;
  text-align: center;
  cursor: pointer;
  width:60%;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
  }
  animation: fadeIn 0.5s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media ${MediaQueries.mdUp} {
    width: 30%;
  }
`

export function Register() {
  const [isAcknowledged, setIsAcknowledged] = useState(false)
  const { mutate: registerUser, isLoading, error } = useRegisterUser()
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
      phone: '',
      address: '',
      city: '',
      zipCode: '',
    },
  })

  const handleSubmitRegisterUser: SubmitHandler<RegisterUserParams> = (data) => {
    registerUser(
      { params: data },
      {
        onSuccess: () => {
          reset()
          navigate('/login')
        },
      },
    )
  }
  const errorMessage = error?.response?.data as string

  return (
    <Container backgroundimage={Image}>
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
          <StyledInput
            placeholder="0723-2019-12"
            type="number"
            {...register('phone', {
              required: 'phone is required',
            })}
          />
          <StyledInput
            placeholder="Flintlåsvägen 22"
            type="text"
            {...register('address', {
              required: 'address is required',
            })}
          />

          <StyledInput
            placeholder="Sollentuna"
            type="text"
            {...register('city', {
              required: 'city is required',
            })}
          />
          <StyledInput
            placeholder="19259"
            type="number"
            {...register('zipCode', {
              required: 'zip Code is required',
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
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </Form>
      </FormWrapper>
    </Container>
  )
}
