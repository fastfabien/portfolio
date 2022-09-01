import emailjs  from '@emailjs/browser'
import React, { useRef } from 'react'
import styled from 'styled-components'
import Button from '../components/custom-button/button.components'
import Input from '../components/custom-form/form'
import Textarea from '../components/custom-form/textarea'

const ContactContainer = styled.section`

    min-height: 100vh;
    padding: 5rem;
    line-height: 1.5;
    background-color: ${props => props.theme.mainBlue};

    p {
        font-size: font-size: ${props => props.theme.fontxl};
        color: ${props => props.theme.white};
    }

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

const ContactHeader = styled.h3`

    font-family: 'Montserrat';
    font-size: ${props => props.theme.fontld};
    font-weight: 800;
    color: ${props => props.theme.white};
    margin-bottom: 2rem;

`

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_24cijod', 'template_8l69mht', form.current, 'SvXP1VSH-vwiOPxXQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <ContactContainer>
            <Title>Contact</Title>
            <ContactHeader>
                Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque
            </ContactHeader>
            <p>
                Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
            </p>
            <form ref={form} onSubmit={sendEmail} >
                <Input type="text" placeholder="name" name="from_name" />
                <Input type="email" placeholder="email" />
                <Textarea placeholder="message" name="message" />
                <Button type="submit">ENVOYER MESSAGE</Button>
            </form>
        </ContactContainer>
    )
}

export default Contact