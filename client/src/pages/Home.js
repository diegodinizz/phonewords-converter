import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { InputField } from '../components/InputField'
import { Button } from '../components/Button'
import { WordList } from '../container/WordList'

import { fetchPhoneWordsAsync } from '../redux/actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 3rem;
  color: #41444b;
  margin: 3rem 0 0 0;
`

const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 4rem 0;
`

export const Home = () => {
  const [number, setNumber] = useState('')
  const [inputTerm, setInputTerm] = useState('')
  const dispatch = useDispatch()

  function handleClick () {
    dispatch(fetchPhoneWordsAsync(inputTerm))
    setNumber(inputTerm)
    setInputTerm('')
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
        onChange={event => setInputTerm(event.target.value)}
      />
      <Button onClick={handleClick} disabled={inputTerm === ''}>
        Submit
      </Button>
      <WordList number={number} />
    </Container>
  )
}
