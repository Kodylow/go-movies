import React, { Fragment } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "./components/Admin";
import Movies from "./components/Movies";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3" />
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul>
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalog</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/movies" element={<Movies />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
