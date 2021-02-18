import React from "react";

const MVTopRated = ({ movieRated }) => {
  console.log(movieRated);
  return (
    <div>
      {movieRated &&
        movieRated.map((m) => <div key={m.id}>{m.original_title}</div>)}
    </div>
  );
};

export default MVTopRated;
