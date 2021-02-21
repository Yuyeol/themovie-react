import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid white;
  .img-box {
  }
`;

const BannerPoster = ({ title }) => (
  <Container>
    <div className="img-box">{title}</div>
  </Container>
);

export default BannerPoster;
