import React from "react";
import styled from "styled-components";
import ButtonHide from "../custom-button/buttonHide";

const MenuContainer = styled.nav`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 60) {
    display: none;
  }
`;
const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.li`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Montserrat";
  color: ${(props) => props.theme.colorBlack};
  position: relative;
  opacity: 1;
  transition: transform .1s ease-in;
  text-align: center;
  cursor: pointer;
  ::after {
    content: "";
    width: 0;
    height: .3rem;
    background-color: ${(props) => props.theme.colorBlack};
    display: block;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width .1s ease-in;
  }
  :hover {
    transform: scale(1.5);
    opacity: .8;
    transition: transform .1s ease-in;
    font-weight: 800;
    ::after {
    width: 100%;
    transition: width .2s ease-in;
  }
  }
`;

const Menu = ({ HandleClick }) => {
  return (
    <MenuContainer>
      <ButtonHide HandleClick={HandleClick} />
      <ListContainer>
        <List onClick={() => HandleClick()}>Home</List>
        <List>Skill</List>
        <List>Experience</List>
        <List>Portfolio</List>
        <List>About</List>
        <List>Contact</List>
      </ListContainer>
    </MenuContainer>
  );
};

export default Menu;
