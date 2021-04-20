import styled, { css } from 'styled-components'

const buttonDisabled = css`
  opacity: 0.7;
  cursor: not-allowed;
`

const getButtonStyles = props => {
  if (props.disabled) return buttonDisabled
}

const Container = styled.button`
  width: auto;
  background-color: #30d158;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  padding: 0 1.5rem;
  text-align: center;
  border: none;
  outline: none;
  margin: 2rem;

  ${getButtonStyles}
`

export const Button = ({ children, onClick, disabled }) => (
  <Container onClick={onClick} disabled={disabled}>
    {children}
  </Container>
)
