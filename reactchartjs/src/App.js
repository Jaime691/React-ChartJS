import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/chart'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }
  componentWillMount(){
    this.getChartData();
  }
  getChartData(){
    //Ajax Call
    this.setState({
        chartData: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 7, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
    })
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

        </div>
        <div>
          <Chart chartData={this.state.chartData}/>
        </div>
      </div>
    );
  }
}

export default App;
