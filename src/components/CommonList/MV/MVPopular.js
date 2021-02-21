import React from "react";

const MVPopular = ({ mvPopular }) => {
  //   console.log(mvPopular);
  return (
    <div>
      {mvPopular &&
        mvPopular.map((m) => <div key={m.id}>{m.original_title}</div>)}
    </div>
  );
};

export default MVPopular;
