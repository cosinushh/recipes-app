import Image from "next/image";
import styled from "styled-components";

export default function Veggie() {
  return (
    <>
      <h1>Veggie</h1>
      <Image
        src="/pizza.jpg"
        width={2400}
        height={1597}
        layout="responsive"
        alt="pizza"
      />
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

const ImageContainer = styled(Image)`
  border: 10px solid red;
`;
