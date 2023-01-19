import styled from "styled-components";

const Section = styled.section`
  padding: 5rem;
  min-height: 60vh;
  background-color: ${(props) => props.theme.mainBlue};

  @media (max-width: 60em) {
    padding: 2rem;
    padding-bottom: 3rem;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.white};
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

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;
  width: 100%;
  margin-top: 5rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-arround;
  font-family: "Montserrat";
  gap: 3rem;
  width: 100%;
  align-items: start;
  color: ${(props) => props.theme.white};
  :hover {
    .rounded::before {
      content: "";
      background-color: ${(props) => props.theme.white};
      height: 2rem;
      width: 2rem;
      border-radius: 100%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0 auto;
      transition: all 0.3s ease;
    }
  }

  p {
    width: 2.5rem;
    font-weight: 700;
    font-size: 1.3rem;
  }
  .rounded {
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid ${(props) => props.theme.white};
    border-radius: 50%;
    background: none;
    position: relative;
    ::after {
      content: "";
      background-color: ${(props) => props.theme.white};
      height: 4rem;
      width: 0.2rem;
      display: ${(props) => (props.last ? "none" : "block")};
      position: absolute;
      top: 3rem;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  @media (max-width: 60em) {
    .rounded {
      display: none;
    }
  }
`;

const Parcours = ({ years, children, last }) => {
  return (
    <Item last={last}>
      <p>{years}</p>
      <div className="rounded"></div>
      <div>{children}</div>
    </Item>
  );
};

const Education = () => {
  return (
    <Section data-scroll data-scroll-section>
      <Title>Education</Title>
      <ItemContainer>
        <Parcours years="2021">Troisième année de Licence CNTEMAD</Parcours>
        <Parcours years="2020">
          Formation intensive de dévéloppement web chez SAYNA
        </Parcours>
        <Parcours years="2019">
          Deuxième année de Licence IFT Fianarantsoa et obtention du diplôme de
          technicien supperieur
        </Parcours>
        <Parcours years="2018" last="last">
          Première année de Licence IFT Fianarantsoa
        </Parcours>
      </ItemContainer>
    </Section>
  );
};

export default Education;
