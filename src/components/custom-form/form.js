import styled from "styled-components";

const Inputs = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  outline: none;
  padding: 1rem 0rem;
  padding-bottom: 0.8rem;
  font-size: ${(props) => props.theme.fontmd};
  width: 100%;
  font-family: "Montserrat";
  margin-top: 1rem;
`;

const Input = ({ type, placeholder, name, value, setName }) => {
  return (
    <Inputs
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setName(e.target.value)}
      autoComplete="off"
      required
    />
  );
};

export default Input;
