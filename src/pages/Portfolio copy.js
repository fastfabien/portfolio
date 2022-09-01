import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import img from '../assets/img/photo.png'

const PortfolioContainer = styled.section`
    padding: 5rem;
    background-color: ${props => props.theme.white};
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
    height: auto;
    overflow: hidden;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

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
  
  position: absolute;
  top: 10rem;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  overflow: hidden;

`

const Item = styled.div`

    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    width: 50rem;
    height: auto;
    padding-bottom: 2rem;

    img {
      width: 20rem;
    }
    div {
      width: 20rem;
    }

`

const Projet = ({ children, image, title }) => {
  return (
    <Item>
      <img src={image} alt="Projet" />
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </Item>
  )
}

const Portfolio = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null)
  const horizontalRef = useRef(null)
  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    var t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: `top top`,
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
          markers: true,
        },
        // We have to increase scrolling height of this element same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none'
      })

      // Horizontal Scroll
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          // markers: true,
        },
        // We have to increase scrolling height of this element same as the scrolling element width
        x: -pinWrapWidth,
        ease: 'none'
      })
      ScrollTrigger.refresh();
    }, 2000)

    return () => {
      // Let's clear instance 
    }
  }, [])



  return (
    <PortfolioContainer ref={ref}>
      <Title>Portfolio</Title>
      <ProjetContainer ref={horizontalRef}>
        <Projet image={img} title="Mandona">
          We are very dedicated to making our products.
          We offer unique and creative products to a wide range of people.
          We have a variety of styles, but for most people, all of the options are in the box.
          We specialize in making things that make you happy.
        </Projet>
        <Projet image={img} title="Mandona">
          We are very dedicated to making our products.
          We offer unique and creative products to a wide range of people.
          We have a variety of styles, but for most people, all of the options are in the box.
          We specialize in making things that make you happy.
        </Projet>
        <Projet image={img} title="Mandona">
          We are very dedicated to making our products.
          We offer unique and creative products to a wide range of people.
          We have a variety of styles, but for most people, all of the options are in the box.
          We specialize in making things that make you happy.
        </Projet>
      </ProjetContainer>
    </PortfolioContainer>
  )
}

export default Portfolio