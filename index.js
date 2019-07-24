import React, { Component } from 'react';
import { render } from 'react-dom';
import InputArea from './components/InputArea'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <InputArea/>        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
