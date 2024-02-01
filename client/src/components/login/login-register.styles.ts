import styled from 'styled-components'
import { Link } from 'react-router-dom'


import { MediaQueries } from '../../utils/style-constants'


type  ContainerProps ={
  backgroundimage?: string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ backgroundimage }) => backgroundimage ? `url(${backgroundimage}) center/cover no-repeat` : 'none'};
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 4rem 1rem;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 8000px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 0.5rem;
`
export const Agreement = styled.span`
  font-size: 12px;
  font-weight: 100px;
  margin: 20px 0px;
  padding-bottom: 10px;
  text-align: center;
  line-height: 1.5rem;
  letter-spacing: 0.05em;
  font-feature-settings: 'ss05';
  line-break: loose;
`
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`
export const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`
export const FormWrapper = styled.div`
  width: 90%;
  padding: 30px;
  background-color: #f6f6f3;
  @media ${MediaQueries.mdUp} {
    width: 60%;
  }
  @media ${MediaQueries.lgUp} {
    width: 40%;
  }
`
export const StyledInput = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid gray;
  &:focus {
    border: 1px solid teal;
    outline: none;
  }
`
export const Label = styled.label`
`
