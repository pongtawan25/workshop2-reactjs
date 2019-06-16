import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "React Test",
      count: 0
    };
    this.setStart=this.setStart.bind(this)
  }

  setStart() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>Timer: {this.state.count}</h3>
        <button onClick={this.setStart} type="button" class="btn btn-outline-primary">Start</button>
        <br/><a href="/"><button class="btn btn-outline-success">back</button></a>
      </div>
    );
  }



}
