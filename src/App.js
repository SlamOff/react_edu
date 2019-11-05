import React from 'react';
import './App.css';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
        <div>
            <Greeting name="Vasia" />
            <Greeting name="Petia" />
        </div>
    );
  }
}

export default App;
