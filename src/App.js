import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import Screen from "./ScreenInterface/Screen";
import Buttons from "./Buttons/Buttons";

const App=()=>{
  return(
    <RecoilRoot>
    <section className="calculator">
      <Screen />
      <Buttons />
    </section>
    </RecoilRoot>
  )
}

export default App;