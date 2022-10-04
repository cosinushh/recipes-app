import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <h2>Comic Sans rules!</h2>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.header`
  background-color: lightcyan;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem;

  & h2 {
    margin: 0;
    padding: 0;
  }
`;
