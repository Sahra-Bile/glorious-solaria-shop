import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'


import { useUpdateUserInfo } from '../../queries/user-queries'
import type { AddressParams } from '../../api/api-service.types'

import { Form, Label, Button, FormWrapper, Container, Title, StyledInput } from './login-register.styles'

export function UpdateUserInfo() {
  const { mutate: updateUserInfo, isLoading } = useUpdateUserInfo()

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<AddressParams>({
    defaultValues: {
      phone: '',
      address: '',
      city: '',
      zipCode: '',
    },
  })

  const handleSubmitUpdateUserInfo: SubmitHandler<AddressParams> = (data) => {

    const userId = 2
    //Todo get userId from BE


    updateUserInfo(
      { userId, params: data },
      {
        onSuccess: () => {
          reset()
        },
      },
    )
  }

  return (
    <Container >
      <FormWrapper>
        <Title>Update address info</Title>
        <Form onSubmit={handleSubmit(handleSubmitUpdateUserInfo)}>
          <Label>Phone</Label>
          <StyledInput
            placeholder="0723-2019-12"
            type="number"
            {...register('phone', {
              required: 'phone is required',
            })}
          />
          <Label>Address</Label>
          <StyledInput
            placeholder="Frihetsvägen 19"
            type="text"
            {...register('address', {
              required: 'address is required',
            })}
          />
          <Label>City</Label>
          <StyledInput
            placeholder="Stockholm"
            type="text"
            {...register('city', {
              required: 'city is required',
            })}
          />
          <Label>zip Code</Label>
          <StyledInput
            placeholder="Stockholm"
            type="number"
            {...register('zipCode', {
              required: 'zip Code is required',
            })}
          />
          <Button type="submit" disabled={!isValid || isLoading}>
            {isLoading ? 'Updating...' : 'Update'}
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  )
}
