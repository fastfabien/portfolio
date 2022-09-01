import styled from "styled-components"

const SkillContainer = styled.section`

    min-height: 100vh;
    padding: 5rem;
    background-color: ${props => props.theme.white};

`

const Title = styled.h2`

    color: ${props => props.theme.colorBlack};
    font-family: 'Playfair Display';
    font-size: ${props => props.theme.fontxxl};
    font-weight: 400;
    ::after {
        content: '';
        display: block;
        margin: 2rem 0;
        width: .15rem;
        height: 5rem;
        background-color: ${props => props.theme.colorBlack};
        margin-top: 3rem;
    }
`

const AllSkills = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;

`

const Item = styled.div`

    display: flex;
    gap: 0;
    align-items: center;
    width: 100%;
    color: ${props => props.theme.colorBlack};

    div:first-child {
        padding: .3rem;
        background: none;
        border: 2px solid ${props => props.theme.colorBlack};
        width: ${props => props.width}%;
    }
    div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: ${props => 100 - props.width}%;
        height: auto;
        gap: .5rem;
        div:first-child {
            height: .1rem;
            width: 95%;
            background: ${props => props.theme.colorBlack};
        }

    }

`

const Skill = ({children, width}) => {
    return(
        <Item width={width}>
            <div>{children}</div>
            <div>
                <div></div>
                {width}%
            </div>
        </Item>
    )
}

const Titles = styled.h3`

    color: ${props => props.theme.colorBlack};
    font-family: 'Playfair Display';
    font-size: ${props => props.theme.fontxl};
    font-weight: 400;
    text-transform: uppercase;
    font-style: italic;


`

const Skills = () => {
  return (
    <SkillContainer>
        <Title>Skills</Title>
        <AllSkills>
            <Titles>Frontend</Titles>
            <Skill width="90">HTML/CSS</Skill>
            <Skill width="80">LESS/SASS</Skill>
            <Skill width="70">REACTJS</Skill>
            <Skill width="80">BOOTSTRAP</Skill>
        </AllSkills>
        <AllSkills>
            <Titles>Backend</Titles>
            <Skill width="70">PYTHON</Skill>
            <Skill width="90">RUBY ON RAILS</Skill>
            <Skill width="80">PHP</Skill>
            <Skill width="60">NODEJS</Skill>
        </AllSkills>
    </SkillContainer>
  )
}

export default Skills