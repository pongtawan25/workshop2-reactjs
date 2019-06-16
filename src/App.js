import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:"React",
       count:0
    }
  }

  render() {
    setTimeout(()=>{
      this.setState({title:"Test"});
    },1000);
    setInterval(()=>{
      this.setState({count:this.state.count+1})
    },100);
    return (
      <div className="App">
        <h1 onChange={this.setTimeout}>{this.state.title}</h1><span>{this.state.count}%</span>
        <h1><a href="/header">Header</a></h1>
        <h1><a href="/content">Content</a></h1>
        <h1><a href="/footer">Footer</a></h1>
      </div>
    );
  }
}

export default App;
