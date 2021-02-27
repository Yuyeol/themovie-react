import React from "react";
import styled from "styled-components";
import noPosterS from "assets/noPosterSmall.png";
import { Link } from "react-router-dom";

const Rating = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0) 10%,
    rgba(20, 20, 20, 0.25) 25%,
    rgba(20, 20, 20, 0.5) 50%,
    rgba(20, 20, 20, 0.75) 75%,
    rgba(20, 20, 20, 1) 100%
  );
  padding-top: 50px;
  margin-bottom: 3px;
  width: 100%;
  opacity: 0;
`;
const Container = styled.div`
  .img-box {
    position: relative;
    cursor: pointer;
    &:hover {
      ${Rating} {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
      }
    }
    img {
      position: relative;
      width: 100%;
      z-index: 0;
    }
  }
  .rating {
  }
`;

const Poster = ({ title, imgUrl, rate, voteCount, id, isMovie }) => {
  return (
    <Container>
      <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <div className="img-box">
          <Rating className="rating">
            <span>⭐️</span>
            {rate}/10 ({voteCount})
          </Rating>
          <img
            alt="poster"
            src={
              imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : noPosterS
            }
          />
        </div>
        {title.length > 18 ? `${title.substring(0, 10)}...` : title}
      </Link>
    </Container>
  );
};
export default Poster;
