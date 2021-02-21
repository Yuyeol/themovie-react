import React from "react";

const TVOnTheAir = ({ tvOnTheAir }) => {
  //   console.log(tvOnTheAir);
  return (
    <div>
      {tvOnTheAir &&
        tvOnTheAir.map((t) => <div key={t.id}>{t.original_name}</div>)}
    </div>
  );
};

export default TVOnTheAir;
