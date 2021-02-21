import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { moviesApi, tvApi } from "../api";
import { GREY, PINK } from "../Styles";
import Loading from "../components/Loading/Loading";
import BannerSection from "../components/Home/Banner/Poster/BannerSection";
import BannerPoster from "../components/Home/Banner/Poster/BannerPoster";
import Section from "../components/Poster/Section";
import Poster from "../components/Poster/Poster";

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

      }
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
  console.log(toggleBanner);
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
            {toggleBanner ? (
              <BannerSection>
                {mvTopRated.map((m) => (
                  <BannerPoster key={m.id} title={m.original_title} />
                ))}
              </BannerSection>
            ) : (
              <BannerSection>
                {tvTopRated.map((m) => (
                  <BannerPoster key={m.id} title={m.original_name} />
                ))}
              </BannerSection>
            )}
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
            {mvUpcomming.map((m) => (
              <Poster key={m.id} title={m.original_title} />
            ))}
          </Section>
          <Section title="Popular Movies">
            {mvPopular.map((m) => (
              <Poster key={m.id} title={m.original_title} />
            ))}
          </Section>
          <Section title="On The Air Shows">
            {tvOnTheAir.map((t) => (
              <Poster key={t.id} title={t.original_name} />
            ))}
          </Section>
          <Section title="Popular Shows">
            {tvPopular.map((t) => (
              <Poster key={t.id} title={t.original_name} />
            ))}
          </Section>
        </>
      )}
    </Container>
  );
};

export default Home;
