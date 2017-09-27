import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle : true,
        displayLegend: true,
        legendPosition: 'right'
    }
    render(){
        return(
            <div className="Chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Lorem ipsum',
                            fontSize: 36
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                }
                            }]
                        }

                    }}
                />
            </div>
        )
    }
}

export default Chart;