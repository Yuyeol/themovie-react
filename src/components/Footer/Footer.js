import React from "react";
import styled from "styled-components";
import { GREY, WHITE } from "../../Styles";

const Container = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  background-color: ${GREY};
  color: ${WHITE};
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
