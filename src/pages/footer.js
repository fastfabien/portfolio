import styled from "styled-components";
import { FaFacebookF, FaLinkedinIn, FaGitlab, FaGithub } from "react-icons/fa";

const Section = styled.footer`
  background-color: ${(props) => props.theme.white};
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 60em) {
    flex-direction: column;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 2rem;
  font-size: ${(props) => props.theme.fontlg};

  a {
    color: ${(props) => props.theme.mainBlue};
  }
`;

const Footer = () => {
  return (
    <Section data-scroll data-scroll-section>
      <Social>
        <a
          href="https://web.facebook.com/samagang24"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/fastfabien/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://gitlab.com/fastfabien56"
          target="_blank"
          rel="noreferrer"
        >
          <FaGitlab />
        </a>
        <a
          href="https://github.com/fastfabien56"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </Social>
      © FastFabien 2022
    </Section>
  );
};

export default Footer;
