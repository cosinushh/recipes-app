import Image from "next/image";
import styled from "styled-components";

export default function Veggie() {
  return (
    <>
      <h1>Veggie</h1>
      <ImageContainer>
        <Image
          src="/pizza.jpg"
          width={2400}
          height={1597}
          layout="fill"
          objectFit="cover"
          alt="pizza"
        />
      </ImageContainer>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </>
  );
}

const ImageContainer = styled.div`
  //wichtig:
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;
  //optional:
  width: 50%;
  margin: auto;
`;
