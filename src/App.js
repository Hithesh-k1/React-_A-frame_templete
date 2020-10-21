import "aframe";
// import 'aframe-animation-component';
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";
import React from "react";
import Sky from "./components/Sky";
import Cube from "./components/Cube";
import Snow from "./components/Snow";
import Background from "./components/Background";
import Ground from "./components/Ground";
import Light from "./components/Light";
import Camera from "./components/Camera";

export default class App extends React.Component {
  render() {
    return (
      <Scene>
        <Background />
        <Ground />
        <Light />
        <Sky />
        <Entity
          text={{ value: "Hello World !", align: "center" }}
          position={{ x: 0, y: 2, z: -1 }}
        />
        <Snow />
        <Cube />
        <Camera />
      </Scene>
    );
  }
}
