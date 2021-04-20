import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: auto;
  min-width: 3rem;
  background-color: #0a84ff;
  border-radius: 5px;
  color: #eaf3f5;
  font-size: 18px;
  font-weight: 600;
  height: 50px;
  padding: 0 0.8rem;
  margin: 0.7rem;
  justify-content: center;
  align-items: center;
`

export const WordListItem = ({ item }) => <Container>{item}</Container>
