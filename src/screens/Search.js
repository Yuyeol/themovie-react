import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { moviesApi, tvApi } from "../api";
import Loading from "../components/Loading/Loading";
import SearchMV from "../components/Search/SearchMV";
import SearchTV from "../components/Search/SearchTV";
import { BLACK, PINK, WHITE } from "../Styles";

const Container = styled.div``;
const SearchForm = styled.div`
  height: ${(props) => (props.active ? "100vh" : "")};
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
      setBlank(false);
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const {
        data: { results: mvR },
      } = await moviesApi.search(searchTerm);
      console.log(mvR);
      setMvResults(mvR);
      const {
        data: { results: tvR },
      } = await tvApi.search(searchTerm);
      console.log(tvR);
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
      <SearchForm active={blank}>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            placeholder="Search Movie or Shows"
            value={searchTerm}
            onChange={handleInput}
          />
        </form>
      </SearchForm>
      {loading ? (
        <Loading />
      ) : blank ? (
        <></>
      ) : (
        <ResultsBox>
          ###################################################################무비검색
          <SearchMV mvResults={mvResults} />
          ###################################################################티비검색
          <SearchTV tvResults={tvResults} />
        </ResultsBox>
      )}
    </Container>
  );
};

export default Search;
