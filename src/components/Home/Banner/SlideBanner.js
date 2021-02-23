import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { BLACK, PINK } from "../../../Styles";

const Container = styled.div`
  background-color: ${BLACK};
  .poster {
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
  }
`;

const SlideBanner = ({ mvTopRated, tvTopRated, toggleBanner }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {toggleBanner
          ? mvTopRated.map((m, i) => (
              <div className="poster" key={m.id}>
                <div className="rank">{i + 1}</div>
                <img
                  src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                  alt="poster"
                />
              </div>
            ))
          : tvTopRated.map((t, i) => (
              <div className="poster" key={t.id}>
                <div className="rank">{i + 1}</div>
                <img
                  src={`https://image.tmdb.org/t/p/original${t.poster_path}`}
                  alt="poster"
                />
              </div>
            ))}
      </Slider>
    </Container>
  );
};

export default SlideBanner;
