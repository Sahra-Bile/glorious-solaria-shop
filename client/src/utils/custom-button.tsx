import { styled } from 'styled-components'

const Button = styled.button`
  background-color: #1d6453;
  color: #fff;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: teal;
  }
  &:active {
    background-color: #534747;
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
type CustomButtonProps = {
  onClick: () => void
  label: string
}

export function CustomButton({ onClick, label }: CustomButtonProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <Button tabIndex={0} onClick={onClick} onKeyDown={handleKeyDown} role="button" aria-label={label}>
      {label}
    </Button>
  )
}
