import { Entity } from "aframe-react";
import React from "react";

export default function Snow() {
  return <Entity particle-system={{ preset: "snow", particleCount: 2000 }} />;
}
