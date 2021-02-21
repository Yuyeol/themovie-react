import React from "react";

const SearchMV = ({ mvResults }) => {
  //   console.log(mvResults);
  return (
    <div>
      {mvResults &&
        mvResults.map((m) => <div key={m.id}>{m.original_title}</div>)}
    </div>
  );
};

export default SearchMV;
