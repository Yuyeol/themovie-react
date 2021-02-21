import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .img-box {
  }
`;

const Poster = ({ title }) => (
  <Container>
    <div className="img-box">{title}</div>
  </Container>
);

export default Poster;
