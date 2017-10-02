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
      selectedGraph: {id:0,name:'zero',set:[0]},
      loading: true,
      error: null
    }
  }
  componentDidMount(){
    this.getChartData();
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
            graphSelect={selectedGraph => this.setState({ selectedGraph })}
            graphs={this.state.graphs} />
        </div>
        <div className="col-md-10">
          <ChartList selectedGraph={this.state.selectedGraph} />
        </div>

      </div>
    );
  }
  getChartData(){
    //Ajax Call

    axios.get(`http://localhost:5000/data`)
      .then(res => {
        const graphs = res.data;
        this.setState({
          graphs,
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
