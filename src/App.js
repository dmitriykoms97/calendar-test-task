import './App.css';
import Header from "./components/header/Header";
import MainBlock from "./components/mainblock/MainBlock";
import {Route, Switch} from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
            <Route path='/about'><AboutUs /></Route>
            <Route path='/'><MainBlock/></Route>
        </Switch>
        </div>
    );
}

export default App;
