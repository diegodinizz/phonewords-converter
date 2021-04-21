import styled, { css } from 'styled-components'

const buttonDisabled = css`
  opacity: 0.7;
  cursor: not-allowed;
`

const getButtonStyles = props => {
  if (props.disabled) return buttonDisabled
}

const Container = styled.button`
  min-width: 85px;
  width: auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  height: 50px;
  padding: 0 1rem;
  text-align: center;
  border: none;
  outline: none;
  margin: 1rem;

  ${getButtonStyles}

  @media screen and (max-width: 600px) {
    height: 45px;
  }
`

export const CustomButton = ({ children, onClick, disabled, color }) => (
  <Container onClick={onClick} disabled={disabled} backgroundColor={color}>
    {children}
  </Container>
)
