
import "./App.css";
import React, { Component } from "react";
import News from "./components/News.js";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  pageSize=10;
  apiKey=process.env.REACT_APP_NEWS_API;
  render() {
    document.body.style.backgroundColor="#E7E6E6"
    return (
      <>
      <Router>
        <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general"/>}/>
          <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={this.pageSize} category="business"/>}/>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} category="entertainment"/>}/>
          <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={this.pageSize} category="health"/>}/>
          <Route exact path="/science" element={<News apiKey={this.apiKey} key="sciece" pageSize={this.pageSize} category="science"/>}/>
          <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={this.pageSize} category="sports"/>}/>
          <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={this.pageSize} category="technology"/>}/>
          <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general"/>}/>
        </Routes>
        <Footer/>
      </Router>
      </>
    );
  }
}



// ********class based Component********
// export default class App extends Component {
//   render() {
//     return (
//       <h1>hello</h1>
//     );
//   }
// }

// ********function based Component*********
// function App() {
//   return (
//     <h1>hello</h1>
//   );
// }
// export default App;
