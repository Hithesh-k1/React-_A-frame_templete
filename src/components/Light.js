import { Entity } from "aframe-react";
import React from "react";

export default function Light() {
  return (
    <>
      <Entity primitive="a-light" type="ambient" color="#445451" />
      <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
    </>
  );
}
