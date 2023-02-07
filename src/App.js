import React, { Component } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImagePromptBar from './components/ImagePromptBar/ImagePromptBar';
import ImageButton from './components/ImageButton/ImageButton';
import ImageResult from './components/ImageResult/ImageResult';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imagePrompt: '',
      imageUrl: ''
    }
  }

  configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  
  openai = new OpenAIApi(this.configuration);


  InputChange = (event) => {
    this.setState({input: event.target.value});
  }

  PromptChange = () => {
    this.setState({imagePrompt: this.state.input});
  }

  GenerateImage = async () => {
    console.log('click');
    await this.PromptChange();
    const imageParameters = {
      prompt: this.state.imagePrompt,
      n: 1,
      size: "256x256",
    }
    console.log(imageParameters);
    
    const response = await this.openai.createImage(imageParameters);
    const urlData = response.data.data[0].url
    console.log(urlData);
    
    this.setState({imageUrl: urlData});
  }

render() {
  return (
    <div >
    <Navigation />
    <Logo />
    <ImagePromptBar 
      inputChange = {this.InputChange}
    />
    <ImageButton 
      generateImage = {this.GenerateImage}
    />
    <ImageResult 
      imageLink={this.state.imageUrl}
    />
    </div>
  );
}
}

export default App;
