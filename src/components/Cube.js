import React, { useState } from "react";
import { Entity } from "aframe-react";

export default function Cube() {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    const colors = ["red", "orange", "yellow", "green", "blue"];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <Entity
      id="box"
      geometry={{ primitive: "box" }}
      material={{ color: color, opacity: 0.6 }}
      animation__rotate={{
        property: "rotation",
        dur: 2000,
        loop: true,
        to: "360 360 360",
      }}
      animation__scale={{
        property: "scale",
        dir: "alternate",
        dur: 100,
        loop: true,
        to: "1.1 1.1 1.1",
      }}
      position={{ x: 0, y: 1, z: -3 }}
      events={{ click: () => changeColor() }}
    >
      <Entity
        animation__scale={{
          property: "scale",
          dir: "alternate",
          dur: 100,
          loop: true,
          to: "2 2 2",
        }}
        geometry={{ primitive: "box", depth: 0.2, height: 0.2, width: 0.2 }}
        material={{ color: "#24CAFF" }}
      />
    </Entity>
  );
}
