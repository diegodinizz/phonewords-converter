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
  outline: none;
  padding: 10px;
  width: 100%;
  height: 50px;
  font-size: 17px;
  color: #545454;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  ::placeholder {
    color: gainsboro;
  }
`

export const InputField = ({ value, placeholder, onChange }) => {
  const handleKeyPress = event => {
    const charAllowed = new RegExp('^[2-9]+$')
    if (!charAllowed.test(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <Container>
      <Label>Phone Number (Max 6 digits)</Label>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxLength='6'
        onKeyPress={handleKeyPress}
      />
    </Container>
  )
}
