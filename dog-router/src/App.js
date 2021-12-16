import React, { Component } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import Navbar from './NavBar';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';
import hazel from './images/hazel.jpg';
import DogDetails from './DogDetails';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs}/>
        <Routes>
          <Route index element={<DogList dogs={this.props.dogs}/>}/>
          <Route path=':dogName' element={<DogDetails dogs={this.props.dogs}/>}/>
        </Routes>
        <Outlet/>
      </div>      
    );
  }
}

export default App;
