import React, { Component } from 'react';
import './App.css';
import LayoutComponent from './componets/layout_component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LayoutComponent />
      </div>
    );
  }
}

export default App;
