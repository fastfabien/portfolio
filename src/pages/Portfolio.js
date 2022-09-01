import React from 'react'
import styled from 'styled-components'
import wibestudio from '../assets/img/wibe-studio.webp'

const PortfolioContainer = styled.section`
    padding: 5rem;
    background-color: ${props => props.theme.white};
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
    height: auto;
    overflow: hidden;

`

const Title = styled.h2`

    color: ${props => props.theme.colorBlack};
    font-family: 'Playfair Display';
    font-size: ${props => props.theme.fontxxl};
    font-weight: 400;
    ::after {
        content: '';
        display: block;
        margin: 2rem 0;
        width: .15rem;
        height: 5rem;
        background-color: ${props => props.theme.colorBlack};
        margin-top: 3rem;
    }
`


const ProjetContainer = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;

`

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
          opacity: .8;
          transform: scaleY(1.1);
        }
      }
    }

`

const Projet = ({ children, title, link, image }) => {
  return (
    <Item>
      <img src={image} alt={title}/>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
        <a href={link} target='_blank' rel="noopener noreferrer">Visiter le site</a>
      </div>
    </Item>
  )
}

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Title>Portfolio</Title>
      <ProjetContainer>
        <Projet title="Wibe Studio" link="https://cutt.ly/RCuqVQs" image={wibestudio}>
          Ceci est une de mes recente projet réalisé avec React, framer-motion, gsap, locomitive scroll et styled-component
        </Projet>
        <Projet title="Wibe Studio" link="https://cutt.ly/RCuqVQs" image={wibestudio}>
          Ceci est une de mes recente projet réalisé avec React, framer-motion, gsap, locomitive scroll et styled-component
        </Projet>
      </ProjetContainer>
    </PortfolioContainer>
  )
}

export default Portfolio