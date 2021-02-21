import React from "react";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Grid = styled.div`
  margin-top: 25px;
  display: flex;
`;

const BannerSection = ({ children }) => (
  <Container>
    <Grid>{children}</Grid>
  </Container>
);

export default BannerSection;
