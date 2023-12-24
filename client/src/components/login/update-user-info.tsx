import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

import { useUpdateUserInfo } from '../../queries/user-queries';
import type { AddressParams } from '../../api/api-service.types';

import { Form, Label, Input, Button, Wrapper, Container, Title } from './login-register.styles';



export function UpdateUserInfo() {
  const form = useRef<HTMLFormElement>(null);
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

    const googleUserId = "";

    updateUserInfo({ googleUserId, params: data }, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <Container>
      <Wrapper >
        <Title>Update address info</Title>
        <Form ref={form} onSubmit={handleSubmit(handleSubmitUpdateUserInfo)}>
          <Label>Phone</Label>
          <Input
            placeholder="0723-2019-12"
            type="number"
            {...register("phone", {
              required: "phone is required",
            })}
          />
          <Label>Address</Label>
          <Input
            placeholder="Frihetsvägen 19"
            type="text"
            {...register("address", {
              required: "address is required",
            })}
          />
          <Label>City</Label>
          <Input
            placeholder="Stockholm"
            type="text"
            {...register("city", {
              required: "city is required",
            })}
          />
          <Label>zip Code</Label>
          <Input
            placeholder="Stockholm"
            type='number'
            {...register("zipCode", {
              required: "zip Code is required",
            })}
          />
          <Button type="submit" disabled={!isValid}>
            Update
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}