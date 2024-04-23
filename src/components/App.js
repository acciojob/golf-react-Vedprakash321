import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        renderBall: false,
        ballPosition: 0
      };
      this.buttonClickHandler = this.buttonClickHandler.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
    }
  
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  
    buttonClickHandler() {
      this.setState({ renderBall: true }, () => {
        this.ballMovementInterval = setInterval(() => {
          this.setState((prevState) => ({
            ballPosition: prevState.ballPosition + 5
          }));
        }, 1000);
      });
    }
  
    handleKeyDown(event) {
      if (event.key === "ArrowRight" && this.state.renderBall) {
        this.setState((prevState) => ({
          ballPosition: prevState.ballPosition + 5
        }));
      }
    }
  
    renderChoice() {
      return this.state.renderBall ? (
        <div className="ball" style={{ left: `${this.state.ballPosition}px` }}></div>
      ) : (
        <button className="start" onClick={this.buttonClickHandler}>Start</button>
      );
    }
  
    render() {
      return (
        <div className="container">
          {this.renderChoice()}
        </div>
      );
    }
  }
  
  export default App;