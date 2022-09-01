import React from 'react'
import styled from 'styled-components'
import DropDown from '../components/DropDown/DropDown'

const ExperienceContainer = styled.section`

    min-height: 100vh;
    padding: 5rem;
    line-height: 2;
    background-color: ${props => props.theme.mainBlue};
    transition: height .2s ease;

`
const Title = styled.h2`

    color: ${props => props.theme.white};
    //styleName: H2;
    font-family: 'Playfair Display';
    font-size: ${props => props.theme.fontxxl};
    font-weight: 400;

    ::after {
        content: '';
        display: block;
        margin: 2rem 0;
        width: .15rem;
        height: 5rem;
        background-color: ${props => props.theme.white};
        margin-top: 3rem;
    }
`

const Experience = () => {

  return (
    <ExperienceContainer data-scroll>
        <Title>Experience</Title>
        <DropDown title="Developpeur Frontend" date="Janvier 2021 - present" id={2}>
            Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
        </DropDown>
        <DropDown title="Stage Developpeur Frontend" date="Fevrier 2020 - Decembre 2020" id={2}>
            Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
        </DropDown>
        <DropDown title="Stage Developpeur VB.net" date="Octobre 2018 - Fevrier 2020" id={3}>
            Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
        </DropDown>
    </ExperienceContainer>
  )
}

export default Experience