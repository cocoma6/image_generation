import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
  }

render() {
  return (
    <div >
    <Navigation />
    <Logo />
    <ImageLinkForm />
    </div>
  );
}
}

export default App;
