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
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  height: 50px;
  padding: 0 1rem;
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
