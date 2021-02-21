import React from "react";

const TVAiringToday = ({ tvAiringToday }) => {
  //   console.log(tvAiringToday);
  return (
    <div>
      {tvAiringToday &&
        tvAiringToday.map((t) => <div key={t.id}>{t.original_name}</div>)}
    </div>
  );
};

export default TVAiringToday;
