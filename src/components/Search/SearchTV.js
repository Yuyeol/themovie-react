import React from "react";

const SearchTV = ({ tvResults }) => {
  //   console.log(tvResults);
  return (
    <div>
      {tvResults &&
        tvResults.map((t) => <div key={t.id}>{t.original_name}</div>)}
    </div>
  );
};

export default SearchTV;
