import React from 'react'
import styled from 'styled-components'
import Button from '../components/custom-button/button.components'
import profil from '../assets/img/photo.png'

const Landing = styled.section`

  background-color: ${props => props.theme.mainBlue};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem; 

`

const Left = styled.div`

  width: 80%;

  p {
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.fontmd};
    line-height: 2;
    width: 80%;
    margin-bottom: 2rem;
  }

`

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
  }
  

`
const Titre = styled.h1`

  font-family: 'Playfair Display';
  font-size: ${props => props.theme.fontxxxl};
  color: ${props => props.theme.white};
  font-weight: 400;
  width: 50%;


`

const Introduction = () => {
  return (
    <Landing>
      <Left data-scroll data-scroll-speed="4">
        <Titre>Hello <br />I'm John Fast</Titre>
        <p>A full stack allaround  designer that tristique est placerat in massa consectetur quisque lobortis Vitae faucibus diam consequat maecenas turpis.</p>
        <Button>Download CV</Button>
      </Left>
      <Right data-scroll data-scroll-speed="4">
        <img src={profil} alt='Profil' />
      </Right>
    </Landing>
  )
}

export default Introduction