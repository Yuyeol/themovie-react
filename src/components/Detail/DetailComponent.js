import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  .bg-box {
    display: flex;
    justify-content: center;
    .bg-img {
      opacity: 0.5;
      height: 100%;
      z-index: -1;
      position: absolute;
    }
  }
  .mv-flexbox {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mv-box {
      padding: 10px;
      width: 70%;
      background-color: rgba(20, 20, 20, 0.4);
      display: flex;
      @media screen and (max-width: 850px) {
        display: block;
        width: 320px;
      }
      img {
      }
      .desc-box {
        margin-left: 20px;
        .title {
          font-size: 30px;
          margin-bottom: 3px;
        }
        .rating {
          font-size: 20px;
          margin-bottom: 3px;
        }
        .genres {
          margin-bottom: 3px;
        }
        .description {
          .text {
            opacity: 0.7;
          }
          .more {
            opacity: 0.7;
            cursor: pointer;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
    .blank-box {
      height: 10%;
    }
  }
`;

const DetailComponent = ({ mvDetail: m, tvDetail: t }) => {
  const [toggleMore, setToggleMore] = useState(true);
  const handleMore = () => {
    setToggleMore(!toggleMore);
  };
  return (
    <>
      {(m || t) && (
        <Container>
          <div className="bg-box">
            <img
              className="bg-img"
              alt="poster"
              src={
                m && m.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${m.backdrop_path}`
                  : t && t.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${t.backdrop_path}`
                  : null
              }
            />
          </div>
          <div className="mv-flexbox">
            <div className="mv-box">
              <img
                alt="poster"
                src={
                  m && m.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${m.poster_path}`
                    : t && t.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${t.poster_path}`
                    : null
                }
              />
              <div className="desc-box">
                <div className="title">
                  {m && m.original_title
                    ? `${m.original_title} (${m.release_date.substring(0, 4)})`
                    : t && t.genres
                    ? `${t.original_name} (${t.first_air_date.substring(0, 4)})`
                    : null}
                </div>
                <div className="rating">
                  ⭐️{" "}
                  {m && m.vote_average
                    ? m.vote_average
                    : t && t.vote_average
                    ? t.vote_average
                    : null}{" "}
                  / 10 ({m ? m.vote_count : t.vote_count})
                </div>
                <div className="genres">
                  {m &&
                    m.genres &&
                    m.genres.map((g, i) =>
                      i === m.genres.length - 1 ? g.name : `${g.name} • `
                    )}
                  {t &&
                    t.genres &&
                    t.genres.map((g, i) =>
                      i === t.genres.length - 1 ? g.name : `${g.name} • `
                    )}
                </div>
                <div className="description">
                  <div className="text">
                    {m && m.overview
                      ? m.overview.length > 18
                        ? toggleMore
                          ? `${m.overview.substring(0, 150)}...`
                          : m.overview
                        : m.overview
                      : null}
                    {t && t.overview
                      ? t.overview.length > 18
                        ? toggleMore
                          ? `${t.overview.substring(0, 150)}...`
                          : t.overview
                        : t.overview
                      : null}
                  </div>
                  <span className="more" onClick={handleMore}>
                    {toggleMore ? "More" : " Close"}
                  </span>
                </div>
              </div>
            </div>
            <div className="blank-box"></div>
          </div>
        </Container>
      )}
    </>
  );
};

export default DetailComponent;
