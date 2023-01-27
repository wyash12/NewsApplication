import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./Components/News";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<News pagesize="8" country="in" category="general" heading="Top Headlines"/>}
          ></Route>
          <Route
            path="/Buisness"
            element={<News pagesize="8" country="in" category="business" heading="Buisness Headlines"/>}
          ></Route>
          <Route
            path="/Entertainment"
            element={<News pagesize="8" country="in" category="entertainment"  heading="Entertainment Headlines"/>}
           ></Route>
          <Route
            path="/General"
            element={<News pagesize="8" country="in" category="general"  heading="General Headlines"/>}
          ></Route>
          <Route
            path="/Health"
            element={<News pagesize="8" country="in" category="health"  heading="Health Headlines" />}
          ></Route>
          <Route
            path="/Science"
            element={<News pagesize="8" country="in" category="science" heading="Science Headlines" />}
          ></Route>
          <Route
            path="/Sports"
            element={<News pagesize="8" country="in" category="sports"  heading="Sports Headlines"/>}
          ></Route>
          <Route
            path="/Technology"
            element={<News pagesize="8" country="in" category="technology"  heading="Technology Headlines"/>}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
