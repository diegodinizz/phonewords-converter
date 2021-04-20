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
  /* transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  } */
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
  display: block;
`

const KeyPadContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  display: none;

  &.active {
    ${showKeyPad}
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
        <button>1</button>
        <button value='2' onClick={onClick}>
          2
        </button>
        <button value='3' onClick={onClick}>
          3
        </button>
        <button value='4' onClick={onClick}>
          4
        </button>
        <button value='5' onClick={onClick}>
          5
        </button>
        <button value='6' onClick={onClick}>
          6
        </button>
        <button value='7' onClick={onClick}>
          7
        </button>
        <button value='8' onClick={onClick}>
          8
        </button>
        <button value='9' onClick={onClick}>
          9
        </button>
      </KeyPadContainer>
    </Container>
  )
}
