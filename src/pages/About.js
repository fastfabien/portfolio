import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.section`

    height: 100vh;
    padding: 5rem;
    line-height: 2;
    background-color: ${props => props.theme.white};

    p {
        font-size: font-size: ${props => props.theme.fontxl};
    }

`

const Title = styled.h2`

    color: ${props => props.theme.colorBlack};
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
        background-color: ${props => props.theme.colorBlack};
        margin-top: 3rem;
    }
`

const AboutHeader = styled.h3`

    font-family: 'Montserrat';
    font-size: ${props => props.theme.fontld};
    font-weight: 800;
    color: ${props => props.theme.colorBlack};
    margin-bottom: 2rem;

`

const About = () => {
    return (
        <AboutContainer data-scroll data-scroll-sticky>
            <Title data-scroll data-scroll-speed="4" data-scroll-direction="vertical">About</Title>
            <AboutHeader data-scroll data-scroll-speed="4" data-scroll-direction="vertical">
                Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque
            </AboutHeader>
            <p data-scroll data-scroll-speed="4" data-scroll-direction="vertical">
                Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
            </p>
        </AboutContainer>
    )
}

export default About