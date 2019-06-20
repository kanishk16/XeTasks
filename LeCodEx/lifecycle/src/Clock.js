import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localCounter: 0
    };
    this.updateLocalCounter = this.updateLocalCounter.bind(this);
  }
  updateLocalCounter() {
    let { localCounter } = this.state;
    this.setState({
      localCounter: ++localCounter
    });
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <div>
        <div>
          <label>Local Counter : {this.state.localCounter}</label>
          <button onClick={this.updateLocalCounter}>Update Local</button>
        </div>
        <div>
          <label>Counter : {this.props.counter}</label>
          <button onClick={this.props.updateCounter}>Update Parent</button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default class UpdateClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.updateCounter = this.updateCounter.bind(this);
  }
  updateCounter() {
    let { counter } = this.state;
    this.setState({
      counter: ++counter
    });
  }
  render() {
    return (
      <Clock updateCounter={this.updateCounter} counter={this.state.counter} />
    );
  }
}
