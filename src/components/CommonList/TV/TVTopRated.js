import React from "react";

const TVTopRated = ({ tvRated }) => {
//   console.log(tvRated);
  return (
    <div>
      {tvRated && tvRated.map((t) => <div key={t.id}>{t.original_name}</div>)}
    </div>
  );
};

export default TVTopRated;
