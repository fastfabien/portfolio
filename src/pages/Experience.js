import React from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown/DropDown";

const ExperienceContainer = styled.section`
  min-height: 100vh;
  padding: 5rem;
  line-height: 2;
  background-color: ${(props) => props.theme.mainBlue};
  transition: height 0.2s ease;

  @media (max-width: 60em) {
    padding: 2rem;
    min-height: 60vh;
    padding-bottom: 5rem;
  }
`;
const Title = styled.h2`
  color: ${(props) => props.theme.white};
  //styleName: H2;
  font-family: "Playfair Display";
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 400;

  ::after {
    content: "";
    display: block;
    margin: 2rem 0;
    width: 0.15rem;
    height: 5rem;
    background-color: ${(props) => props.theme.white};
    margin-top: 3rem;
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer data-scroll data-scroll-section>
      <Title>Experience</Title>
      <DropDown
        title="Developpeur Frontend"
        date="Janvier 2021 - Decembre 2022"
        id={2}
      >
        Conception et développement des sites web.
      </DropDown>
      <DropDown
        title="Stage Developpeur Frontend"
        date="Fevrier 2020 - Decembre 2020"
        id={2}
      >
        Intégration et développement d'un site web en utilisant Ruby on Rails.
      </DropDown>
      <DropDown
        title="Stage Developpeur VB.net"
        date="Octobre 2018 - Fevrier 2019"
        id={3}
      >
        Conception et développement d'une application pour la géstion de logement administratif.
      </DropDown>
    </ExperienceContainer>
  );
};

export default Experience;
