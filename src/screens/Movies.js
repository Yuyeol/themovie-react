import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { moviesApi } from "../api";
import MVNowPlaying from "../components/CommonList/MV/MVNowPlaying";
import MVPopular from "../components/CommonList/MV/MVPopular";
import MVTopRated from "../components/CommonList/MV/MVTopRated";
import MVUpcomming from "../components/CommonList/MV/MVUpcomming";
import Loading from "../components/Loading/Loading";

const Container = styled.div``;

const Movie = () => {
  const [mvTopRated, setMvTopRated] = useState(null);
  const [mvUpcomming, setMvUpcomming] = useState(null);
  const [mvPopular, setMvPopular] = useState(null);
  const [mvNowPlaying, setMvNowPlaying] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      try {
        const {
          data: { results: mvR },
        } = await moviesApi.topRated();
        setMvTopRated(mvR);
        const {
          data: { results: mvN },
        } = await moviesApi.nowPlaying();
        setMvNowPlaying(mvN);
        const {
          data: { results: mvP },
        } = await moviesApi.popular();
        setMvPopular(mvP);
        const {
          data: { results: mvU },
        } = await moviesApi.upcomming();
        setMvUpcomming(mvU);
      } catch {
        setError("Can't find information.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          ###################################################################무비레이티드
          <MVTopRated mvTopRated={mvTopRated} />
          ###################################################################무비나우플레잉
          <MVNowPlaying mvNowPlaying={mvNowPlaying} />
          ###################################################################무비인기
          <MVPopular mvPopular={mvPopular} />
          ###################################################################무비업커밍
          <MVUpcomming mvUpcomming={mvUpcomming} />
        </>
      )}
    </Container>
  );
};

export default Movie;
