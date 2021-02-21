import React from "react";

const TVPopular = ({ tvPopular }) => {
  console.log(tvPopular);
  return (
    <div>
      {tvPopular &&
        tvPopular.map((t) => <div key={t.id}>{t.original_name}</div>)}
    </div>
  );
};

export default TVPopular;
