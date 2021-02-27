import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { moviesApi, tvApi } from "../api";
import DetailComponent from "../components/Detail/DetailComponent";

const Container = styled.div``;

const Detail = ({
  location: { pathname },
  match: {
    params: { id },
  },
}) => {
  const parsedId = parseInt(id);
  const [mvDetail, setMvDetail] = useState(null);
  const [tvDetail, setTvDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMovie, setIsMovie] = useState(pathname.includes("/movie/"));
  useEffect(() => {
    const loadData = async () => {
      try {
        if (isMovie) {
          const { data: result } = await moviesApi.movieDetail(parsedId);
          setMvDetail(result);
        } else {
          const { data: result } = await tvApi.showDetail(parsedId);
          setTvDetail(result);
        }
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
      <DetailComponent mvDetail={mvDetail} tvDetail={tvDetail} />
    </Container>
  );
};

export default Detail;
