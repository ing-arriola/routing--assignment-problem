import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Academy from "../src/containers/Academy";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Academy />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
