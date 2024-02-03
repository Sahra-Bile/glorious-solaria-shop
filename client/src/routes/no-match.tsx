import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
const Wrapper = styled.div({
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  marginTop: '200px',
  color: 'black',
  fontSize: '50px',
  textAlign: 'center',
})
const Heading = styled.h1({
  color: 'black',
  fontSize: '50px',
  textAlign: 'center',
})
const StyledLink = styled(Link)({
  color: 'black',
  fontSize: '50px',
  textAlign: 'center',
})

export function NoMatch() {
  return (
    <Wrapper>
      <Heading>😭 NO MATCH 😭</Heading>
      <StyledLink to="/">TAKE ME BACK</StyledLink>
    </Wrapper>
  )
}
