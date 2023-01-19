import styled from "styled-components";

const Textareas = styled.textarea`
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
  height: 6rem;
  overflow-y: scroll;
  margin-top: 1rem;
  margin-bottom: 2rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Textarea = ({ placeholder, name, value, setName }) => {
  return (
    <Textareas
      name={name}
      onChange={(e) => setName(e.target.value)}
      value={value}
      placeholder={placeholder}
      required
    />
  );
};

export default Textarea;
