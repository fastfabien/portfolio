import React from "react";
import styled from "styled-components";

const CustomButton = styled.a`
  background-color: ${(props) => props.theme.transparent};
  padding: 1rem 2rem;
  text-align: center;
  border: 2px solid ${(props) => props.theme.white};
  outline: none;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.fontmd};
  font-family: "Montserrat";
  position: relative;
  curson: pointer;
  span {
    position: relative;
    z-index: 2;
  }
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 0;
  }
  :hover {
    color: ${(props) => props.theme.mainBlue};
    ::before,
    ::after {
      top: 0;
      background-color: ${(props) => props.theme.white};
      height: 100%;
      width: 100%;
      z-index: 1;
      transition: width 0.8s ease;
    }
    ::before {
      left: 0;
    }
    ::after {
      right: 0;
    }
  }
`;

const Button = ({ children, type, href, handleClick }) => {
  return (
    <CustomButton type={type} href={href} onClick={handleClick}>
      <span>{children}</span>
    </CustomButton>
  );
};

export default Button;
