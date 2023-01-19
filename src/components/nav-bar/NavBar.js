import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: relative;
  padding-top: 1rem;
  padding-right: 1.5rem;
  animation: AddOpacity 0.5s ease;

  @keyframe AddOpacity {
    from {
      opacity: 0;
    }
    top {
      opacity: 1;
    }
  }

  @media (max-width: 60em) {
    display: none;
  }
`;

const Hamburger = styled.span`
  position: relative;
  display: block;
  &,
  &::before,
  &::after {
    content: "";
    background-color: ${(props) => props.theme.colorBlack};
    width: 1rem;
    height: 0.3rem;
  }
  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 2rem;
    height: 0.3rem;
  }
  ::before {
    bottom: 0.6rem;
  }
  ::after {
    top: 0.6rem;
    height: 0.34rem;
  }
`;

const Name = styled.h2`
  font-family: "Montserrat";
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontmd};
  transform: rotate(-90deg);
  margin-top: 4rem;
  position: absolute;
  white-space: nowrap;
  right: -1.3rem;
`;

const NavBar = ({ HandleClick }) => {
  return (
    <Container
      onClick={() => HandleClick()}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Hamburger />
      <Name>John Fast</Name>
    </Container>
  );
};

export default NavBar;
