import React from "react";
import styled from "styled-components";
import wibestudio from "../assets/img/wibe-studio.webp";
import apple_project from "../assets/img/Hero-section-desktop.png"
import natours from "../assets/img/nat-1-large.jpg";

const PortfolioContainer = styled.section`
  padding: 5rem;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  background-color: ${(props) => props.theme.white};

  @media (max-width: 60em) {
    padding: 2rem;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colorBlack};
  font-family: "Playfair Display";
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 400;
  ::after {
    content: "";
    display: block;
    margin: 2rem 0;
    width: 0.15rem;
    height: 5rem;
    background-color: ${(props) => props.theme.colorBlack};
    margin-top: 3rem;
  }
`;

const ProjetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  img {
    width: 30%;
    object-fit: cover;
    height: auto;
  }
  div {
    width: 70%;
    h2 {
    }
    p {
      text-align: justify;
      margin-top: 2rem;
      line-height: 1.5;
    }

    a {
      text-decoration: underline;
      font-weight: 700;
      display: block;
      margin-top: 2rem;
      :hover {
        opacity: 0.8;
        transform: scaleY(1.1);
      }
    }
  }

  @media (max-width: 60em) {
    flex-direction: column;
    img {
      width: 100%;
    }

    div {
      width: 100%;
    }
  }
`;

const Projet = ({ children, title, link, image }) => {
  return (
    <Item>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visiter le site
        </a>
      </div>
    </Item>
  );
};

const Portfolio = () => {
  return (
    <PortfolioContainer data-scroll data-scroll-section>
      <Title>Portfolio</Title>
      <ProjetContainer>
        <Projet
          title="Wibe Studio"
          link="https://cutt.ly/RCuqVQs"
          image={wibestudio}
        >
          Ceci est une de mes recente projet réalisé avec React, framer-motion,
          gsap, locomitive scroll et styled-component
        </Projet>
        <Projet
          title="Apple 3d Landing Page"
          link="https://cutt.ly/l9jhndW"
          image={apple_project}
        >
          Ceci est une projet réalisé avec ReactJS, ThreeJS,
          gsap et styled-component
        </Projet>
        <Projet
          title="Natours Project"
          link="https://cutt.ly/D9jljkE"
          image={natours}
        >
          Ceci est une projet réalisé avec HTML/CSS/SASS
        </Projet>
      </ProjetContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
