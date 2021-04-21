import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { InputField } from '../components/InputField'
import { PhoneKeyboard } from '../components/PhoneKeyboard'
import { CustomButton } from '../components/CustomButton'
import { WordList } from '../container/WordList'

import { clearPhoneWords, fetchPhoneWordsAsync } from '../redux/actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #41444b;
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 3rem 0 0 0;
`

const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 4rem 0;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Home = () => {
  const [number, setNumber] = useState('')
  const [inputTerm, setInputTerm] = useState('')
  const dispatch = useDispatch()

  function handleSubmit () {
    dispatch(fetchPhoneWordsAsync(inputTerm))
    setNumber(inputTerm)
    setInputTerm('')
  }

  function handleClick (event) {
    if (inputTerm.length <= 5) {
      setInputTerm([...inputTerm, event.target.value].join(''))
    }
  }

  function handleClear () {
    setInputTerm('')
    setNumber('')
    dispatch(clearPhoneWords())
  }

  return (
    <Container>
      <Title>Phonewords Converter</Title>
      <Subtitle>
        Submit a phone number to display a list of its possible phone words
      </Subtitle>
      <InputField
        value={inputTerm}
        placeholder='Digits valid from 2 to 9'
        onChange={event => setInputTerm([event.target.value].join(''))}
      />
      <PhoneKeyboard onClick={handleClick} />
      <ButtonsContainer>
        <CustomButton
          onClick={handleSubmit}
          disabled={inputTerm === ''}
          color='#30d158'
        >
          Submit
        </CustomButton>
        <CustomButton
          onClick={handleClear}
          disabled={inputTerm === ''}
          color='#AEAEB2'
        >
          Clear
        </CustomButton>
      </ButtonsContainer>
      <WordList number={number} />
    </Container>
  )
}
