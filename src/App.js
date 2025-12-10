import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const apiKey = "a0e20590dcec4fdba1f7c0de8a1f686a"
  //const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  

  const pageSize = 5;
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
                category="general"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
                category="technology"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
                category="sports"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
                category="science"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
                category="business"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key="health"
                pageSize={pageSize}
                country={"us"}
                apiKey={apiKey}
                category="health"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
