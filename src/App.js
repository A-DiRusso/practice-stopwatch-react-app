import React from 'react';
import './App.css';
import Stopwatch from './Stopwatch';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickingTime: 0,
      tickTickTick: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Stopwatch clickHandler={this._clickedButton} 
                     timerBool={this.tickTickTick}
                     timerTime={this.state.tickingTime}
                     resetHandler={this._resetTime}/>
        </header>
      </div>
    );
  }
  _clickedButton = () => {
    this.interval = setInterval(() => {
      this.setState({
        tickingTime: this.state.tickingTime + 1
      })
    }, 1000);
  } 
  _resetTime = () => {
    this.setState({
      tickingTime: 0
    })
  }
}


export default App;
