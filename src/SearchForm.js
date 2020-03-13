import React from "react";
import "./Form.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <label for="title">Search for StarWars Name</label>
        <br />
        <input
          placeholder="enter Star Wars... last name??"
          type="text"
          name="content"
          id=""
        ></input>
        <br />
        <button type="submit">May the Force Be With You</button>
      </form>
    );
  }
}

export default SearchForm;
