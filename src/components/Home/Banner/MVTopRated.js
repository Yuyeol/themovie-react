import React from "react";

const MVTopRated = ({ mvTopRated }) => {
  //   console.log(mvTopRated);
  return (
    <div>
      {mvTopRated && mvTopRated.map((m) => <div key={m.id}>{m.original_title}</div>)}
    </div>
  );
};

export default MVTopRated;
