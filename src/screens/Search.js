import React, { useState } from "react";
import styled from "styled-components";
import { moviesApi, tvApi } from "../api";
import Loading from "../components/Loading/Loading";
import Poster from "../components/Poster/Poster";
import Section from "../components/Poster/Section";
import { BLACK, PINK, WHITE } from "../Styles";

const Container = styled.div`
  .blank {
    height: 100vh;
  }
`;
const SearchForm = styled.div`
  .search-form {
    padding: 15px;
    input {
      width: 50%;
      color: ${WHITE};
      font-size: 28px;
      background-color: ${BLACK};
      border: 0px solid black;
      &:focus {
        border-bottom: 2px solid ${PINK};
        outline: none;
      }
      @media screen and (max-width: 700px) {
        width: 100%;
      }
    }
  }
`;
const ResultsBox = styled.div``;

const Search = () => {
  const [blank, setBlank] = useState(true);
  const [mvResults, setMvResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleInput = ({ target: { value } }) => {
    setSearchTerm(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      loadData();
      setSearchTerm("");
    }
  };

  const loadData = async () => {
    setBlank(false);
    setLoading(true);
    try {
      const {
        data: { results: mvR },
      } = await moviesApi.search(searchTerm);
      setMvResults(mvR);
      const {
        data: { results: tvR },
      } = await tvApi.search(searchTerm);
      setTvResults(tvR);
    } catch {
      setError("Can't find information.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <SearchForm>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            placeholder="Search Movie or Shows"
            value={searchTerm}
            onChange={handleInput}
          />
        </form>
      </SearchForm>
      {blank ? (
        <div className="blank"></div>
      ) : loading ? (
        <Loading />
      ) : (
        <ResultsBox>
          <Section title="Movie Results">
            {mvResults &&
              mvResults.map((m) => (
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
          <Section title="Show Results">
            {tvResults &&
              tvResults.map((t) => (
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
        </ResultsBox>
      )}
    </Container>
  );
};

export default Search;
