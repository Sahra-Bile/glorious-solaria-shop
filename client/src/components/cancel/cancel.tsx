import { useNavigate } from 'react-router'
import { styled } from 'styled-components'

import { Container } from '../login/login-register.styles'
import Image from '../../asserts/checkout.png'

export const Button = styled.button`
  border: none;
  outline: 0;
  padding: 20px;
  color: white;
  background-color: #1d6453;
  text-align: center;
  cursor: pointer;
  width: 100%;
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
`
const Heading = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
`
const Paragraph = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
`


export function Cancel() {
    const navigate = useNavigate()
    return (
        <Container backgroundimage={Image}>
            <div>
                <Heading>Payment failed</Heading>
                <Paragraph>Payment was not successful please try again...</Paragraph>
                <div>
                    <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
                </div>
            </div>
        </Container>
    )
}
