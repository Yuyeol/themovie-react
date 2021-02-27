import React from "react";
import styled from "styled-components";
import { FiLoader } from "react-icons/fi";
import { GREY } from "../../Styles";

const Container = styled.div`
  height: 100vh;
  margin-top: 100px;
  div {
    text-align: center;
    svg {
      font-size: 200px;
      color: ${GREY};
    }
    .loading {
      font-size: 40px;
      font-weight: 600;
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <div>
        <FiLoader />
        <div className="loading">Loading...</div>
      </div>
    </Container>
  );
};

export default Loading;
