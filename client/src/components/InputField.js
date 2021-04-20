import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
`

const Label = styled.p`
  margin: 3px 0;
  font-weight: 300;
  font-size: 1rem;
  color: gray;
`

const Input = styled.input`
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  width: 100%;
  height: 50px;
  font-size: 17px;
  color: #545454;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);

  ::placeholder {
    color: gainsboro;
  }
`

export const InputField = ({ name, value, placeholder, onChange }) => (
  <Container>
    <Label>Phone Number</Label>
    <Input
      type='number'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Container>
)
