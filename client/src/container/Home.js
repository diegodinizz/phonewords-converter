import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 3rem;
  color: #41444b;
  text-align: center;
`

export const Home = () => (
  <Container>
    <Title>Phonewords Converter</Title>
  </Container>
)
