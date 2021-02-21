import React from "react";

const MVNowPlaying = ({ mvNowPlaying }) => {
  //   console.log(mvNowPlaying);
  return (
    <div>
      {mvNowPlaying &&
        mvNowPlaying.map((m) => <div key={m.id}>{m.original_title}</div>)}
    </div>
  );
};

export default MVNowPlaying;
