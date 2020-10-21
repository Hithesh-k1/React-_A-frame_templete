import React from "react";
import { Entity } from "aframe-react";

export default function Camera(props) {
  return (
    <Entity primitive="a-camera">
      <Entity
        primitive="a-cursor"
        animation__click={{
          property: "scale",
          startEvents: "click",
          from: "0.1 0.1 0.1",
          to: "1 1 1",
          dur: 150,
        }}
      />
    </Entity>
  );
}
