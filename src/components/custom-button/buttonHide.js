import React from 'react'
import styled from 'styled-components'

const Hide = styled.div`

    position: absolute;
    top: 2rem;
    right: 2rem;
    padding: 2em;
    background-color: ${props => props.theme.white};
    border-radius: 50%;
    transition: transform .5 ease;
    cursor: pointer;
    :hover {
        transform: scale(.9);
        transition: transform .5 ease;
    }


    span {
        position: relative;
        ::before, ::after {
            content: '';
            display: block;
            width: 2.5em;
            height: .2em;
            background-color: ${props => props.theme.colorBlack};
            position: absolute;
            top: 0;
            left: -1.2em;
        }
        ::before {
            transform: rotate(45deg);
        }
        ::after {
            transform: rotate(-45deg);
        }
    }

`

const ButtonHide = ({ HandleClick }) => {
    return (
        <Hide onClick={() => HandleClick()}>
            <span></span>
        </Hide>
    )
}

export default ButtonHide