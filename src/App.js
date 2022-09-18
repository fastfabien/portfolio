import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/nav-bar/Menu";
import NavBar from "./components/nav-bar/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Introduction from "./pages/Introduction";
import Portfolio from "./pages/Portfolio";
import GlobalStyles from "./styles/GlobalStyles";
import { Dark } from "./styles/Themes";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/footer";
// import Cursor from "./components/custom-cursor/cursor";

const Main = styled.main`

  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: ${(props) => (props.showNav ? "space-between" : "center")};
  padding-top: ${(props) => (props.showNav ? "" : "5rem")};
  overflow: hidden;
  height: ${(props) => (props.showNav ? "100vh" : "auto")};
  overscroll-behavior-block: ${(props) =>
    props.showNav ? "contain" : "auto"};;

  nav {
    & + section {
      transform: ${(props) =>
        props.showNav ? "perspective(300px) rotateY(-20deg) scale(.5);" : ";"}
      transition: transform 1s ease;
    } 
  }
  
  @media (max-width: 60rem) {
    padding-top: 0;
  }


`;

const Content = styled.div`
  width: 80%;

  @media (max-width: 60em) {
    width: 100%;
  }
`;

function App() {
  const [showNav, setShowNav] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return () => {};
  }, [showNav]);

  const HandleClick = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            {/* <Cursor /> */}
            <Main
              className="App"
              showNav={showNav}
              data-scroll-container
              ref={containerRef}
            >
              {showNav ? (
                <Menu HandleClick={HandleClick} />
              ) : (
                <NavBar HandleClick={HandleClick} />
              )}
              {showNav ? (
                <Introduction className="Introduction" />
              ) : (
                <Content showNav={showNav}>
                  <Introduction />
                  <About />
                  <Experience />
                  <Portfolio />
                  <Education />
                  <Skills />
                  <Contact />
                  <Footer />
                </Content>
              )}
            </Main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
