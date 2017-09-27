import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'
import * as chartAnnotation from 'chartjs-plugin-annotation'

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
                            text:'Histograma',
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
                        },
                        annotation: {
                            annotations: [{
                                type: 'box',
                                drawTime: 'beforeDatasetsDraw',
                                id: 'region-1',
                                mode: "horizontal",
                                yScaleID: 'y-axis-0',
                                yMin: 1.2,
                                yMax: 6.5,
                                backgroundColor: 'rgba(200,230,201,0.5)'
                            }]
                        }

                    }}
                />
            </div>
        )
    }
}

export default Chart;