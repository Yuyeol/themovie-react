import React from "react";
import styled from "styled-components";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { GREY, PINK } from "../Styles";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    svg {
      font-size: 250px;
      color: ${GREY};
    }
    .big-text {
      color: ${PINK};
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .small-text {
      font-size: 28px;
    }
  }
`;

const Blank = () => {
  return (
    <Container>
      <div>
        <AiTwotoneFolderOpen />
        <div className="big-text">
          There are
          <br />
          No Movies or Shows{" "}
        </div>
        <div className="small-text">
          Make your playlist and
          <br />
          Watch whenever you want!
        </div>
      </div>
    </Container>
  );
};

export default Blank;
