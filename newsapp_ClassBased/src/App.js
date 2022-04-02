import "./App.css";

import React, { Component, useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  catego
                  exactry="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  catego
                  exactry="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  catego
                  exactry="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }

  export default App