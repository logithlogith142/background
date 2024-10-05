import React, { useState } from "react";

export default function Backround() {
  const [color, setcolor] = useState("");
  const [tcolor, settcolor] = useState(true);

  const click = () => {
    let a = document.querySelector(".input").value;
    setcolor(a);
    console.log(color);
  };
  const toggle = () => {
    settcolor(false);
  };
  return (
    <div>
      <input type="text" className="input" />
      <button onClick={click}>click</button>;
      <div
        style={{
          height: 200,
          width: 400,
          background: color,
          padding: 50,
          color: tcolor ? "white" : "black",
        }}
      >
        <h1>{color}</h1>
        <p>hello</p>
      </div>
      <button onClick={toggle}>toggle</button>
    </div>
  );
}
