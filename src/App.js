import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: []
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>StarWars App</h1>
          <img
            id="logo"
            src="/images/1280px-Star_Wars_Logo.svg.png"
            alt="Star Wars logo"
          />
          <SearchForm />
          <p>I dont know anything about StarWars</p>
        </header>
      </div>
    );
  }
}
export default App;
