import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { WordListItem } from '../components/WordListItem'

const Container = styled.div`
  width: 80%;
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
  font-size: 1.5rem;
  color: #41444b;
  text-align: center;
`

export const WordList = ({ number }) => {
  const wordList = useSelector(state => state.wordsData)
  const fetching = useSelector(state => state.isFetching)
  
  return (
    <div>
      {!fetching ? (
        <Container>
          <Title>List of Words for the number: {number}</Title>
          <ListContainer>
            {wordList.map((item, index) => (
              <WordListItem key={index} item={item} />
            ))}
          </ListContainer>
        </Container>
      ) : null}
    </div>
  )
}
