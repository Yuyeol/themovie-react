import React from "react";

const TVTopRated = ({ tvTopRated }) => {
//   console.log(tvTopRated);
  return (
    <div>
      {tvTopRated && tvTopRated.map((t) => <div key={t.id}>{t.original_name}</div>)}
    </div>
  );
};

export default TVTopRated;
