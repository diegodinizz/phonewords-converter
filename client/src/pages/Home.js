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
`

export const Home = () => {
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()

  function handleClick () {
    dispatch(fetchPhoneWordsAsync(number))
    setNumber('')
  }

  return (
    <Container>
      <Title>Phonewords Converter</Title>
      <InputField
        value={number}
        placeholder='Only digits from 2 to 9'
        onChange={event => setNumber(event.target.value)}
      />
      <Button onClick={handleClick} disabled={number === ''}>
        Submit
      </Button>
      <WordList />
    </Container>
  )
}
