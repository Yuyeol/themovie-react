import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { BLACK } from "../../../Styles";

const Container = styled.div`
  background-color: ${BLACK};
  .poster {
    position: relative;
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
      // 반응형 웹 구현 옵션
      {
        breakpoint: 700, // 화면 사이즈 1200px
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
          ? mvTopRated.map((m) => (
              <div className="poster" key={m.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                  alt="poster"
                />
              </div>
            ))
          : tvTopRated.map((t) => (
              <div className="poster" key={t.id}>
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
