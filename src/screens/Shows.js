import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { tvApi } from "../api";
import Loading from "../components/Loading/Loading";
import Section from "../components/Poster/Section";
import Poster from "../components/Poster/Poster";

const Container = styled.div``;

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
          <Section title="Top Rated">
            {tvTopRated.map((t) => (
              <Poster
                key={t.id}
                title={t.original_name}
                imgUrl={t.poster_path}
                rate={t.vote_average}
                voteCount={t.vote_count}
                id={t.id}
                isMovie={false}
              />
            ))}
          </Section>
          <Section title="Airing Today">
            {tvAiringToday.map((t) => (
              <Poster
                key={t.id}
                title={t.original_name}
                imgUrl={t.poster_path}
                rate={t.vote_average}
                voteCount={t.vote_count}
                id={t.id}
                isMovie={false}
              />
            ))}
          </Section>
          <Section title="Popular">
            {tvPopular.map((t) => (
              <Poster
                key={t.id}
                title={t.original_name}
                imgUrl={t.poster_path}
                rate={t.vote_average}
                voteCount={t.vote_count}
                id={t.id}
                isMovie={false}
              />
            ))}
          </Section>
          <Section title="On The Air">
            {tvOnTheAir.map((t) => (
              <Poster
                key={t.id}
                title={t.original_name}
                imgUrl={t.poster_path}
                rate={t.vote_average}
                voteCount={t.vote_count}
                id={t.id}
                isMovie={false}
              />
            ))}
          </Section>
        </>
      )}
    </Container>
  );
};

export default Shows;
