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
