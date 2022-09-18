import React from 'react'
import CursorPosition from './cursorPosition'

import styled from 'styled-components'

const CursorContainer = styled.div`
    width: 30px;
    height: 30px;
    border: 2px solid red;
    border-radius: 50%;
    position: fixed;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    z-index: 999;
`



const Cursor = () => {
  const {x, y} = CursorPosition()
  return (
    <CursorContainer left={x} top={y}></CursorContainer>
  )
}

export default Cursor