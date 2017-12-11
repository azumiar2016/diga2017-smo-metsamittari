import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import MultiSelect from './components/multiSelect'
class App extends Component {
  render() {
    return (
      <div className="App">
        <MultiSelect/>
      </div>
    );
  }
}

export default App;
