import React from "react";

function Name(props) {
  return (
    <section className="Name">
      <Name id={props.name.id} name={props.name.name} />
    </section>
  );
}

export default Name;
