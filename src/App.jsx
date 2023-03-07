// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import react from "react";
import { Brand, Cta, Navbar } from "./components/index";
import {
  Blog,
  Header,
  Footer,
  Features,
  Possibility,
  WhatGPT,
} from "./containers/index";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
