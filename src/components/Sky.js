import { Entity } from "aframe-react";
import React from "react";

export default function Sky(props) {
  return (
    <Entity
      primitive="a-sky"
      height="2048"
      radius="30"
      src="#skyTexture"
      theta-length="90"
      width="2048"
    />
  );
}
