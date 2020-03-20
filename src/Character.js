import React from "react";

function Character(props) {
  return props.character ? (
    <section className="Character">
      <p>{props.character.name}</p>
    </section>
  ) : '';
}

export default Character;
