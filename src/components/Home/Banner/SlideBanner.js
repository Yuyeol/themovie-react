import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { BLACK, PINK } from "../../../Styles";
import SlidePoster from "./SlidePoster";

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

const SlideBanner = ({ mvTopRated, tvTopRated, toggleBanner, isMovie }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
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
              <SlidePoster m={m} i={i} isMovie={true} key={m.id} />
            ))
          : tvTopRated.map((t, i) => (
              <SlidePoster t={t} i={i} isMovie={false} key={t.id} />
            ))}
      </Slider>
    </Container>
  );
};

export default SlideBanner;
