import React, { Component } from 'react';
import Student from './Student.js';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
      <h1 className="leaders-board">Leaders Board</h1>
        <Student name="John Doe" university="NED" score={347}/>
        <Student name="Rizwan" university="NUST" score={345}/>
        <Student name="Shahzaib" university="Uiversity Of Malaya" score={340}/>
      </div>
    );
  }
}

export default App;
