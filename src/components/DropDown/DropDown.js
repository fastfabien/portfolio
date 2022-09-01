import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'

const DropDownContainer = styled.div`

    width: 100%;
    border-bottom: 2px solid ${props => props.theme.white};
    margin-top: 1rem;

`

const DropDownHeader = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    padding-right: .3rem;
    cursor: pointer;
    span {
        color: ${props => props.theme.white};
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: ${props => props.theme.fontmd};
        line-height: 1.2;
    }
    span:last-child{
        transform: scaleX(3)
    }

`

const DropDownBody = styled(motion.div)`

    margin-top: .5rem;
    color: ${props => props.theme.white};
    p {
        text-align: justify;
        font-size: ${props => props.theme.fontmd};
        margin-top: .2rem;
        margin-bottom: .3rem;
    }
    p:first-child {
        font-weight: 700;
        font-family: 'Montserrat';
    }

`

const DropDown = ({ children, title, date, id }) => {
    const [click, setClick] = useState(false)
    return (
        <DropDownContainer>
            <DropDownHeader onClick={() => setClick(!click)}>
                <span>{title}</span>
                <span>-</span>
            </DropDownHeader>
            {
                click ?
                    <DropDownBody key={id}
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: .7 }}
                    exit={{ height: 0 }}
                    >
                        <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: .5,duration: .3 }}
                        exit={{ x: -100 }}
                        

                        >{date}</motion.p>
                        <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: .5,duration: .3 }}
                        
                        exit={{ x: -100 }}
                        >{children}</motion.p>
                    </DropDownBody>
                    : ''
            }
        </DropDownContainer>
    )
}

export default DropDown