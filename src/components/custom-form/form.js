import styled from "styled-components"

const Inputs = styled.input`

    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.theme.white};
    color: ${props => props.theme.white};
    outline: none;
    padding: 1rem 0rem;
    padding-bottom: .8rem;
    font-size: ${props => props.theme.fontmd};
    width: 100%;
    font-family: 'Montserrat';
    margin-top: 1rem;
`

const Input = ({ type, placeholder, value }) => {
  return (
    <Inputs type={type} placeholder={placeholder} />
  )
}

export default Input
