import React from "react";
import { useParams } from "react-router-dom";

function Movie() {
  let { id } = useParams();
  return (
    <div>
      <h2>Movie id {id}</h2>
    </div>
  );
}

export default Movie;
