import { Entity } from "aframe-react";
import React from "react";

export default function Ground() {
  return (
    <Entity
      primitive="a-plane"
      src="#groundTexture"
      rotation="-90 0 0"
      height="100"
      width="100"
    />
  );
}
