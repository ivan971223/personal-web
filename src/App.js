import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
import Contact from './components/contact'
import About from './components/about'
import Project from './components/project'
import Resume from './components/resume'
import Gallery from './components/gallery'
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div >
        <Nav></Nav>
        <Home></Home>
        <About></About>
        <Project></Project>
        <Resume></Resume>
        <Gallery></Gallery>
        <Contact></Contact>
      </div>
    );
  }
}


export default App;
