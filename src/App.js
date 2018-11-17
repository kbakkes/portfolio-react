import React, { Component } from 'react';
import './App.css';


import AppBarComponent from './components/AppBarComponent';
import SideBarMenuComponent from "./components/SideBarMenuComponent";
import HomeComponent from "./components/HomeComponent";


class App extends Component {
  render() {
    return (
      <div className="App">
          <SideBarMenuComponent/>
            <AppBarComponent/>
            <HomeComponent/>
      </div>
    );
  }
}

export default App;
