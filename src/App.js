import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Picturebox from './components/Picturebox/Picturebox';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Picturebox />
        
      </div>
    );
  } 
}

export default App;
