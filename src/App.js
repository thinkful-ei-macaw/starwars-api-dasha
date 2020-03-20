import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Character from "./Character";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  createName = e => {
    e.preventDefault();
    let search = e.target.search.value;
    
    fetch(`https://swapi.co/api/people/?search=${search}`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
    .then(res=>this.setState({characters:res.results}));
     
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
           <section className="names">
            {this.state.characters.map((character, index) => (
              <Character key={index} index={index} character={character} />
            ))}
          </section> 
          
        </header>
      </div>
    );
  }
}
export default App;
