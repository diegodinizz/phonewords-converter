import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { InputField } from '../components/InputField'
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
  const data = useSelector(state => state.wordsData)

  console.log(number)

  return (
    <Container>
      <Title>Phonewords Converter</Title>
      <InputField
        name='number'
        value={number}
        placeholder='Only digits from 2 to 9'
        onChange={event => setNumber(event.target.value)}
      />
    </Container>
  )
}
