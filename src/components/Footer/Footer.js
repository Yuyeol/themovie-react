import React from "react";
import styled from "styled-components";
import { YELLOW, BLACK } from "../../Styles";

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 35px;
  display: flex;
  justify-content: center;
  background-color: ${YELLOW};
  color: ${BLACK};
  div {
    font-weight: 600;
    display: flex;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <div>THE MOVIE REACT • Designed by URE • 2021</div>
    </Container>
  );
};

export default Footer;
