import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Newscom from "./component/Newscom";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const pageSize = 17;


  return (
    <div>
      <Navbar />
      {/* <Newscom pageSize={pageSize} country="in"category="general"/> */}

      <Routes>
        <Route
          path="/"
          element={
            <Newscom
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <Newscom
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <Newscom
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          path="/general"
          element={
            <Newscom
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/health"
          element={
            <Newscom
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <Newscom
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <Newscom
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <Newscom
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );

}

export default App