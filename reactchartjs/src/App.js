import React, { Component } from 'react';
import './App.css';
import ChartList from './components/chartList'
import ButtonList from './components/buttonList'
import data from './data/historic'
import graphs from './data/graphs'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{},
      dataSet:[],
      graphs:[{key:1, value:10}],
      selectedGraph: null
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

    this.setState({
        graphs:{graphs},
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
        
        <div className="col-md-2">
          <ButtonList 
            graphSelect={selectedGraph => this.setState({ selectedGraph })}
            graphs={this.state.graphs} />
        </div>
        <div className="col-md-10">
          <ChartList chartData={this.state.chartData} />
        </div>
      </div>
    );
    console.log(this.state)
  }
}

export default App;
