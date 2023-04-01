import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/Row Post/RowPost";
import {action,orignals} from'./urls'
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={orignals} title="Nerflix Orignals"/>
    <RowPost url={action} title="Action" isSmall/>

    </div>
  );
}

export default App;
