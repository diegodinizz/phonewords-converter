import { useState } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: auto;
  margin-top: 1rem;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

const ShowHideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  border-top: 1px solid rgba(212, 212, 217, 0.5);
`

const Title = styled.p`
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`
const turnArrow = css`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transition: transform 300ms ease-out;
`

const Arrow = styled.i`
  margin-right: 0.5rem;
  border: solid #41444b;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition: transform 300ms ease-out;

  &.turn {
    ${turnArrow}
  }
`

const showKeyPad = css`
  display: grid;
`

const KeyPadContainer = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  padding: 15px 30px;
  display: none;
  gap: 10px;

  .row-4 {
    grid-column-start: 2;
  }

  &.active {
    ${showKeyPad}
  }
`

const KeyNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 60px;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: #e8e8e8;

  :hover {
    background-color: #f4f4f2;
  }
`

export const PhoneKeyboard = ({ onClick }) => {
  const [active, setActive] = useState(false)

  return (
    <Container>
      <ShowHideContainer onClick={() => setActive(!active)}>
        <Title>Show/Hide Phone Keyboard</Title>
        <Arrow className={active ? 'turn' : ''}></Arrow>
      </ShowHideContainer>
      <KeyPadContainer className={active ? 'active' : ''}>
        <KeyNumber>1</KeyNumber>
        <KeyNumber onClick={onClick}>2</KeyNumber>
        <KeyNumber onClick={onClick}>3</KeyNumber>
        <KeyNumber onClick={onClick}>4</KeyNumber>
        <KeyNumber onClick={onClick}>5</KeyNumber>
        <KeyNumber onClick={onClick}>6</KeyNumber>
        <KeyNumber onClick={onClick}>7</KeyNumber>
        <KeyNumber onClick={onClick}>8</KeyNumber>
        <KeyNumber onClick={onClick}>9</KeyNumber>
        <KeyNumber className='row-4'>0</KeyNumber>
      </KeyPadContainer>
    </Container>
  )
}
