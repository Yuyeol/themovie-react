import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { moviesApi, tvApi } from "../api";
import { GREY, PINK } from "../Styles";
import MVTopRated from "../components/Home/Banner/MVTopRated";
import TVTopRated from "../components/Home/Banner/TVTopRated";
import MVUpcomming from "../components/CommonList/MV/MVUpcomming";
import MVPopular from "../components/CommonList/MV/MVPopular";
import TVPopular from "../components/CommonList/TV/TVPopular";
import Loading from "../components/Loading/Loading";
import TVAiringToday from "../components/CommonList/TV/TVAiringToday";
import TVOnTheAir from "../components/CommonList/TV/TVOnTheAir";

const Container = styled.div``;
const Banner = styled.div`
  .toggle-box {
    display: flex;
    div {
      font-weight: 600;
      padding-bottom: 3.5px;
      margin: 10px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      width: 70px;
      align-items: center;
      &:first-child {
        background-color: ${PINK};
      }
      &:last-child {
        background-color: ${GREY};
      }
    }
  }
`;

const Shows = () => {
  const [tvTopRated, setTvTopRated] = useState(null);
  const [tvAiringToday, setTvAiringToday] = useState(null);
  const [tvPopular, setTvPopular] = useState(null);
  const [tvOnTheAir, setTvOnTheAir] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      try {
        const {
          data: { results: tvR },
        } = await tvApi.topRated();
        setTvTopRated(tvR);
        const {
          data: { results: tvT },
        } = await tvApi.airingToday();
        setTvAiringToday(tvT);
        const {
          data: { results: tvP },
        } = await tvApi.popular();
        setTvPopular(tvP);
        const {
          data: { results: tvO },
        } = await tvApi.onTheAir();
        setTvOnTheAir(tvO);
      } catch {
        setError("Can't find information.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* TV popular&upcomming, Movie popular&upcommning */}
          ###################################################################티비레이티드
          <TVTopRated tvTopRated={tvTopRated} />
          ###################################################################티비투데이
          <TVAiringToday tvAiringToday={tvAiringToday} />
          ###################################################################티비인기
          <TVPopular tvPopular={tvPopular} />
          ###################################################################티비업커밍
          <TVOnTheAir tvOnTheAir={tvOnTheAir} />
        </>
      )}
    </Container>
  );
};

export default Shows;
