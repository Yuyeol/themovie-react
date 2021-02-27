import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PINK } from "../../../Styles";
const Container = styled.div`
  position: relative;

  .rank {
    position: absolute;
    background-color: ${PINK};
    width: 40px;
    height: 40px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #c10644;
    border-right: 4px solid #c10644;
    border-bottom: 5px solid #c10644;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
`;

const SlidePoster = ({ m, t, i, isMovie }) => {
  return (
    <Container key={m ? m.id : t.id}>
      <Link to={isMovie ? `/movie/${m.id}` : `/show/${t.id}`}>
        <div className="rank">{i + 1}</div>
        <img
          src={`https://image.tmdb.org/t/p/original${
            m ? m.poster_path : t.poster_path
          }`}
          alt="poster"
        />
      </Link>
    </Container>
  );
};

export default SlidePoster;
