import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
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
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AnimatePresence } from 'framer-motion';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Education from './pages/Education';
import Skills from './pages/Skills';

const Main = styled.main`

  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: ${props => props.showNav ? 'space-between' : 'center'};
  padding-top: 5rem;
  overflow: hidden;

  


`

const Content = styled.header`

  width: 80%;
  // transform: scale(${props => props.showNav ? .5 : 1});
  ${props => props.showNav ? 'transform: scale(.5);' : ''}
  // perspective(300px) rotateY(-20deg)
  transition: transform .5s ease;
  ${props => props.showNav ? 'position: absolute' : ''};
  right: 0;
`

function App() {
  const [showNav, setShowNav] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    return () => {

    }
  }, [showNav])

  const HandleClick = () => {
    setShowNav(!showNav)
  }
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Dark} >
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          {/* <ScrollTriggerProxy /> */}
          <AnimatePresence>
            <Main className='App' showNav={showNav} data-scroll-container ref={containerRef}>
              {
                showNav ? <Menu HandleClick={HandleClick} /> : <NavBar HandleClick={HandleClick} />
              }
              {
                showNav ? <Introduction className='Introduction' /> :
                  <Content showNav={showNav}>
                    <Introduction />
                    <About />
                    <Experience />
                    <Portfolio />
                    <Education />
                    <Skills />
                  </Content>
              }
            </Main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
