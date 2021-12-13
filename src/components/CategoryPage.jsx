import React from "react";
import { useMatch, Link } from "react-router-dom";

function CategoryPage() {
  let { path, url } = useMatch();
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to={`${path}/comedy`}>Comedy</Link>
        </li>
        <li>
          <Link to={`${path}/drama`}>Drama</Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryPage;
