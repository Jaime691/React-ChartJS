import React, {Component} from 'react'
import Chart from './chart'

class ChartList extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataArray : []
        }
    }
    render(){
        return(
            <div>
                <Chart chartData={this.props.chartData}/>
            </div>
        )
    }
}

export default ChartList;