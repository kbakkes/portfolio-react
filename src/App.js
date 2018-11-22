import React, { Component } from 'react';
import './App.css';


import AppBarComponent from './components/AppBarComponent';
import SideBarMenuComponent from "./components/SideBarMenuComponent";
import ShowcaseComponent from "./components/ShowcaseComponent";


class App extends Component {
  render() {
    return (
      <div className="App">
          <SideBarMenuComponent/>
            <AppBarComponent/>
            <ShowcaseComponent title="Karim Bakkes" color="#00FF0B"/>
          <ShowcaseComponent title="Karim Bakkes" color="#0022ff"/>


      </div>
    );
  }
}

export default App;
