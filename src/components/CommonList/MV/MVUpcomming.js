import React from "react";

const MVUpcomming = ({ mvUpcomming }) => {
  //   console.log(mvUpcomming);
  return (
    <div>
      {mvUpcomming &&
        mvUpcomming.map((m) => <div key={m.id}>{m.original_title}</div>)}
    </div>
  );
};

export default MVUpcomming;
