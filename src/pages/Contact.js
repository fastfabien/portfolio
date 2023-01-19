import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../components/custom-button/button.components";
import Input from "../components/custom-form/form";
import Textarea from "../components/custom-form/textarea";
import { ReactComponent as Loader } from "../assets/img/Loading.svg";

const ContactContainer = styled.section`

    min-height: 60vh;
    padding: 5rem;
    line-height: 1.5;
    background-color: ${(props) => props.theme.mainBlue};

    p {
        font-size: font-size: ${(props) => props.theme.fontxl};
        color: ${(props) => props.theme.white};
    }

    button {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

    }

    @media (max-width: 60em) {
      padding: 2rem;
      paddiing-bottom: 3rem;

      p {
        font-size: ${(props) => props.theme.fontmd};
      }
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

const ContactHeader = styled.h3`
  font-family: "Montserrat";
  font-size: ${(props) => props.theme.fontld};
  font-weight: 800;
  color: ${(props) => props.theme.white};
  margin-bottom: 2rem;

  @media (max-width: 60em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Message = styled.div`
  color: ${(props) => props.messageColor};
  margin-top: 2rem;
`;

const Btn = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;

  @media (max-width: 60em) {
    width: 100%;
  }
`;

const Contact = () => {
  const form = useRef();
  const messages = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [messageColor, SetMessageColor] = useState("");
  const [loading, SetLoading] = useState(false);

  const hideMessage = (messages) => {
    setTimeout(() => {
      messages.style.display = "none";
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    SetLoading(true);
    emailjs
      .sendForm(
        "service_24cijod",
        "template_8l69mht",
        form.current,
        "SvXP1VSH-vwiOPxXQ"
      )
      .then(
        (result) => {
          SetMessageColor("green");
          setSendMessage("Message envoyé avec succèss");
          hideMessage(messages.current);
          SetLoading(false);
        },
        (error) => {
          console.log(error.text);
          SetMessageColor("red");
          setSendMessage(error.text);
          hideMessage(messages.current);
          SetLoading(false);
        }
      );
    form.current.reset();
  };
  return (
    <ContactContainer data-scroll data-scroll-section>
      <Title>Contact</Title>
      <ContactHeader>
        Dolor sit amet, consectetur adipiscing elit viverra tristique placerat
        in massa consectetur quisque
      </ContactHeader>
      <p>
        Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu.
        Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo
        in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate
        phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
      </p>
      <form onSubmit={sendEmail} ref={form}>
        <Input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          setName={setName}
        />
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          setName={setEmail}
        />
        <Textarea
          placeholder="message"
          name="message"
          value={message}
          setName={setMessage}
        />
        <Btn>
          <Button type="submit">ENVOYER MESSAGE</Button>
          {loading && <Loader height={30} width={30} />}
        </Btn>
      </form>
      <Message ref={messages} messageColor={messageColor}>
        {sendMessage}
      </Message>
    </ContactContainer>
  );
};

export default Contact;
