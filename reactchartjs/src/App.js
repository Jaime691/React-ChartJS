import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ChartList from './components/chartList'
import ButtonList from './components/buttonList'


// import data from './data/historic'
// import graphs from './data/graphs'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{},
      graphs:[],
      graph:[],
      graphsForCharts:[],
      graphsForButtons:[],
      loading: true,
      error: null
    }
    this.updateGraphs = this.updateGraphs.bind(this)
  }
  componentDidMount(){
    this.getChartData();
  }

  getChartData() {
    //Ajax Call

    axios.get(`http://localhost:5000/data`)
      .then(res => {
        const graphsForCharts = res.data;
        const graphsForButtons = res.data;
        this.setState({
          graphsForCharts,
          graphsForButtons,
          loading: false,
          error: null
        });
      }).catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Something went wrong: {this.state.error.message}
      </div>
    );
  }



  updateGraphs(object){
    function equalObject(elemento) {
      return elemento.id === object.id;
    }
    const checkArray = this.state.graphs.some(equalObject)

    if (!checkArray) {
      const filtrado = this.state.graphsForCharts.filter(equalObject);
      this.setState({
        graphs: this.state.graphs.concat(filtrado)
      })
    } else {
      const removeIndex = this.state.graphs.map(function (item) { return item.id; }).indexOf(object.id);

      const check = this.state.graphs.splice(removeIndex, 1)
      this.setState({
        graphs: this.state.graphs
      })

    }


  }

  renderGraphs() {
    // Using destructuring to extract the 'error' and 'posts'
    // keys from state. This saves having to write "this.state.X" everwhere.
    const { error, graphs } = this.state;

    if (error) {
      return this.renderError();
    }

    return (
      <div>
        <div className="col-md-2">
          <ButtonList
            updateGraphs={this.updateGraphs}
            graphs={this.state.graphsForButtons} />
        </div>
        <div className="col-md-10">
          <ChartList graphs={this.state.graphs} />
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? this.renderLoading() : this.renderGraphs()}
      </div>
    );
  }
}

export default App;
