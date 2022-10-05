import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <h2>Comic Sans rules!</h2>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.footer`
  font-family: "Comic Sans MS", "Comic Sans", Arial, Helvetica, sans-serif;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-image: linear-gradient(90deg, blue, yellow, red, purple);
  padding: 1rem;
  color: white;

  & h2 {
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
