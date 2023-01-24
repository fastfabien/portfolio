import React from "react";
import styled from "styled-components";
import Button from "../components/custom-button/button.components";
import profil from "../assets/img/profil.jpeg";
import { saveAs } from "file-saver";
import cv from "../assets/pdf/file.pdf";

const Landing = styled.section`
  background-color: ${(props) => props.theme.mainBlue};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  gap: 2rem;

  @media (max-width: 60em) {
    flex-direction: column;
    padding: 2rem;
    align-items: unset;
    padding-bottom: 3rem;
  }

  @media (max-width: 70em) {
    min-height: 60vh;
  }
`;

const Left = styled.div`
  width: 80%;

  @media (max-width: 60em) {
    width: 100%;
    order: 2;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.fontmd};
    line-height: 2;
    width: 80%;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  @media (max-width: 60em) {
    width: 100%;
    p {
      width: 100%;
    }
  }

  // @media (max-width: 70em) {
  //   p {
  //     font-size: ${(props) => props.theme.fontlg};
  //   }
  // }
`;

const Right = styled.div`
  width: 20%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    position: absolute;
    right: -10rem;
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    object-position: top;
  }

  @media (max-width: 60em) {
    order: 1;
    width: 100%;
    img {
      display: block;
      margin: 0 auto;
      position: unset;
      width: 100%;
      height: 12rem;
    }
  }
  @media (max-width: 70em) {
    img {
      height: 50vh;
    }
  }
`;
const Titre = styled.h1`
  font-family: "Playfair Display";
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.white};
  font-weight: 400;
  width: 50%;

  @media (max-width: 60em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Introduction = () => {
  const saveFile = () => {
    saveAs(cv);
  };
  return (
    <Landing data-scroll data-scroll-section>
      <Left data-scroll data-scroll-speed="4">
        <Titre>
          Bonjour <br />
          Je suis John Fast
        </Titre>
        <p>
          Je suis un développeur frontend et intégrateur, et j'adore implementer des belles interfaces utilisateur et j'adore coder tout simplement.
        </p>
        <Button handleClick={saveFile}>Download CV</Button>
      </Left>
      <Right data-scroll data-scroll-speed="4">
        <img src={profil} alt="Profil" />
      </Right>
    </Landing>
  );
};

export default Introduction;
