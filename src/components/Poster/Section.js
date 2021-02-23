import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 50px;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-left: 25px;
`;

const Grid = styled.div`
  margin: 15px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

export default Section;
