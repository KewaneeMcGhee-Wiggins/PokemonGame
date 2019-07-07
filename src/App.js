import React, { Component } from 'react';
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}

export default App;
//{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 }, return 1 to see if it works

