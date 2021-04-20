import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { WordListItem } from '../components/WordListItem'

const Container = styled.div`
  width: 50%;
  margin: 2rem 0;
  margin-left: auto;
  margin-right: auto;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 1rem;
  color: #41444b;
  text-align: center;
`

export const WordList = () => {
  const wordList = useSelector(state => state.wordsData)

  return (
    <Container>
      <Title>Word List</Title>
      <ListContainer>
        {wordList
          ? wordList.map((item, index) => (
              <WordListItem key={index} item={item} />
            ))
          : null}
      </ListContainer>
    </Container>
  )
}
