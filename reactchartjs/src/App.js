import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/chart'
import data from './data/historic'
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
    
    const fechaResultado = data.map((e) => {
      return e.FECHARESULTADO
    })
    const resultado = data.map((e) => {
      return e.RESULTADO
    })

    const colorResultado = resultado.map((e)=>{
      if (e<data[0].INFERIOR) {
        return '#FFDE21'
      } else if(e>data[0].SUPERIOR){
        return '#D12229'
      }else{
        return '#016FB9'
      }
    })
    const colorBorde = resultado.map((e) => {
      if (e < data[0].INFERIOR) {
        return 'rgba(255, 206, 86, 1)'
      } else if (e > data[0].SUPERIOR) {
        return 'rgba(255,99,132,1)'
      } else {
        return 'rgba(54, 162, 235, 1)'
      }
    })
    console.log(colorResultado)
    this.setState({
        chartData: {
          labels: fechaResultado,
          datasets: [{
            label: 'Historico',
            data: resultado,
            backgroundColor: colorResultado,
            borderColor: colorBorde,
            borderWidth: 1
          }]
        }
    })
  }
  render() {
    return (
      <div>
        <div>
          <Chart chartData={this.state.chartData}/>
        </div>
      </div>
    );
  }
}

export default App;
