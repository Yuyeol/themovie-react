import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { moviesApi, tvApi } from "../api";
import MVTopRated from "../components/Home/MVTopRated";

const Container = styled.div``;
const Movies = styled.div``;
const TV = styled.div``;

const Home = () => {
  const [movieRated, setMovieRated] = useState(null);
  const [movieUpcomming, setMovieUpcomming] = useState(null);
  const [tvRated, setTvRated] = useState(null);
  const [tvUpcomming, setTvUpcomming] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        const {
          data: { results: movieR },
        } = await moviesApi.topRated();
        setMovieRated(movieR);
        const {
          data: { results: tvR },
        } = await tvApi.topRated();
        setTvRated(tvR);
      } catch {
        setError("Can't find information.");
      }
    };
    loadData();
  }, []);
  return (
    <Container>
      latest 롤링배너, TV latest&upcomming, Movie latest&upcommning
      <MVTopRated movieRated={movieRated} />
      <TV>TV</TV>
    </Container>
  );
};

export default Home;
