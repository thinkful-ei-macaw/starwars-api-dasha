import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Name from "./Name";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      names: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1/")
      .then(response => response.json())
      .then(response => this.setState({ names: response }));
  }

  createName = e => {
    e.preventDefault();
    let newName = { title: e.target.title.value };
    this.setState(
      {
        names: [...this.state.names, newName]
      },
      () => {
        fetch("https://swapi.co/api/people/1/", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newName)
        }).then(response => response.json());
      }
    );
  };

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
          <SearchForm createName={this.createName} />
          <p>I dont know anything about StarWars</p>
          {/* <section className="names">
            {this.state.names.map((name, index) => (
              <Name key={index} index={index} name={name} />
            ))}
          </section> */}
          <Name />
        </header>
      </div>
    );
  }
}
export default App;
