import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { moviesApi } from "../api";
import Loading from "../components/Loading/Loading";
import Poster from "../components/Poster/Poster";
import Section from "../components/Poster/Section";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Section title="Top Rated">
            {mvTopRated &&
              mvTopRated.map((m) => (
                <Poster
                  key={m.id}
                  title={m.original_title}
                  imgUrl={m.poster_path}
                  rate={m.vote_average}
                  voteCount={m.vote_count}
                  id={m.id}
                  isMovie={true}
                />
              ))}
          </Section>
          <Section title="Now Playing">
            {mvNowPlaying &&
              mvNowPlaying.map((m) => (
                <Poster
                  key={m.id}
                  title={m.original_title}
                  imgUrl={m.poster_path}
                  rate={m.vote_average}
                  voteCount={m.vote_count}
                  id={m.id}
                  isMovie={true}
                />
              ))}
          </Section>
          <Section title="Popular">
            {mvPopular &&
              mvPopular.map((m) => (
                <Poster
                  key={m.id}
                  title={m.original_title}
                  imgUrl={m.poster_path}
                  rate={m.vote_average}
                  voteCount={m.vote_count}
                  id={m.id}
                  isMovie={true}
                />
              ))}
          </Section>
          <Section title="Upcomming">
            {mvUpcomming &&
              mvUpcomming.map((m) => (
                <Poster
                  key={m.id}
                  title={m.original_title}
                  imgUrl={m.poster_path}
                  rate={m.vote_average}
                  voteCount={m.vote_count}
                  id={m.id}
                  isMovie={true}
                />
              ))}
          </Section>
        </>
      )}
    </Container>
  );
};

export default Movie;
