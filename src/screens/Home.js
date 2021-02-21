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
import TVOnTheAir from "../components/CommonList/TV/TVOnTheAir";
import Section from "../components/Home/Banner/Poster/Section";

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

const Home = () => {
  const [mvTopRated, setMvTopRated] = useState(null);
  const [mvUpcomming, setMvUpcomming] = useState(null);
  const [mvPopular, setMvPopular] = useState(null);
  const [tvTopRated, setTvTopRated] = useState(null);
  const [tvOnTheAir, setTvOnTheAir] = useState(null);
  const [tvPopular, setTvPopular] = useState(null);
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
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Banner>
            <Section title="Top Rated">
              
            </Section>
            ###################################################################무비레이티드
            <MVTopRated mvTopRated={mvTopRated} />
            ###################################################################티비레이티드
            <TVTopRated tvTopRated={tvTopRated} />
            <div className="toggle-box">
              {/* =토글로 mv&tv 전환되는 롤링배너 */}
              <div className="toggle-mv">Movies</div>
              <div className="toggle-tv">Shows</div>
            </div>
          </Banner>
          {/* TV popular&upcomming, Movie popular&upcommning */}
          ###################################################################무비업커밍
          <MVUpcomming mvUpcomming={mvUpcomming} />
          ###################################################################티비업커밍
          <TVOnTheAir tvOnTheAir={tvOnTheAir} />
          ###################################################################무비인기
          <MVPopular mvPopular={mvPopular} />
          ###################################################################티비인기
          <TVPopular tvPopular={tvPopular} />
        </>
      )}
    </Container>
  );
};

export default Home;
