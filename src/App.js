import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
  apiKey =process.env.REACT_APP_NEWS_API
state={
  progress: 0
}
setProgress=(progress)=>
{
  this.setState({
    progress: progress
  })
}
  render() {

    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
    
      />
        <Routes>
          <Route
            path="/"
            element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   pagesize="8" country="in" category="general" heading="Top Headlines"/>}
          ></Route>
          <Route
            path="/Buisness"
            element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   pagesize="8" country="in" category="business" heading="Buisness Headlines"/>}
          ></Route>
          <Route
            path="/Entertainment"
            element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   pagesize="8" country="in" category="entertainment"  heading="Entertainment Headlines"/>}
           ></Route>
          <Route
            path="/General"
            element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   pagesize="8" country="in" category="general"  heading="General Headlines"/>}
          ></Route>
          <Route
            path="/Health"
            element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   pagesize="8" country="in" category="health"  heading="Health Headlines" />}
          ></Route>
          <Route
            path="/Science"
            element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   pagesize="8" country="in" category="science" heading="Science Headlines" />}
          ></Route>
          <Route
            path="/Sports"
            element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   pagesize="8" country="in" category="sports"  heading="Sports Headlines"/>}
          ></Route>
          <Route
            path="/Technology"
            element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   pagesize="8" country="in" category="technology"  heading="Technology Headlines"/>}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
