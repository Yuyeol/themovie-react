import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { moviesApi, tvApi } from "../api";
import { GREY, PINK } from "../Styles";
import Loading from "../components/Loading/Loading";
import Section from "../components/Poster/Section";
import Poster from "../components/Poster/Poster";
import SlideBanner from "../components/Home/Banner/SlideBanner";

const Container = styled.div``;
const Banner = styled.div`
  .toggle-box {
    display: flex;
    div {
      z-index: 9;
      font-weight: 600;
      margin: 10px;
      padding: 2px 0;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      cursor: pointer;
    }
  }
`;
const ToggleMv = styled.div`
  background-color: ${(props) => (props.selected ? PINK : GREY)};
`;
const ToggleTv = styled.div`
  background-color: ${(props) => (props.selected ? GREY : PINK)};
`;

const Home = () => {
  const [mvTopRated, setMvTopRated] = useState(null);
  const [mvUpcomming, setMvUpcomming] = useState(null);
  const [mvPopular, setMvPopular] = useState(null);
  const [tvTopRated, setTvTopRated] = useState(null);
  const [tvOnTheAir, setTvOnTheAir] = useState(null);
  const [tvPopular, setTvPopular] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggleBanner, setToggleBanner] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      try {
        const {
          data: { results: mvR },
        } = await moviesApi.topRated();
        setMvTopRated(mvR);
        const {
          data: { results: tvR },
        } = await tvApi.topRated();
        setTvTopRated(tvR);
        const {
          data: { results: mvU },
        } = await moviesApi.upcomming();
        setMvUpcomming(mvU);
        const {
          data: { results: tvU },
        } = await tvApi.onTheAir();
        setTvOnTheAir(tvU);
        const {
          data: { results: mvP },
        } = await moviesApi.popular();
        setMvPopular(mvP);
        const {
          data: { results: tvP },
        } = await tvApi.popular();
        setTvPopular(tvP);
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
  const turnMV = () => {
    setToggleBanner(true);
  };
  const turnTV = () => {
    setToggleBanner(false);
  };
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Banner>
            <SlideBanner
              mvTopRated={mvTopRated}
              tvTopRated={tvTopRated}
              toggleBanner={toggleBanner}
            />
            <div className="toggle-box">
              <ToggleMv
                className="toggle-mv"
                onClick={turnMV}
                selected={toggleBanner}
              >
                Movies
              </ToggleMv>
              <ToggleTv
                className="toggle-tv"
                onClick={turnTV}
                selected={toggleBanner}
              >
                Shows
              </ToggleTv>
            </div>
          </Banner>
          <Section title="Upcomming Movies">
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
          <Section title="Popular Movies">
            {mvPopular &&
              mvPopular.map((m) => (
                <Poster
                  key={m.id}
                  title={m.original_title}
                  imgUrl={m.poster_path}
                  rate={m.vote_average}
                  voteCount={m.vote_count}
                  isMovie={true}
                />
              ))}
          </Section>
          <Section title="On The Air Shows">
            {tvOnTheAir &&
              tvOnTheAir.map((t) => (
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
          <Section title="Popular Shows">
            {tvPopular &&
              tvPopular.map((t) => (
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

export default Home;
