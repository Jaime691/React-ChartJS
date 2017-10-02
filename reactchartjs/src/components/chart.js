import React from 'react'
import {Bar} from 'react-chartjs-2'
import 'chartjs-plugin-annotation'

const Chart = (props) => {

     const displayTitle  = true,
        displayLegend = true,
        legendPosition = 'right'
        
        return(
            
            <div className="Chart">
                <Bar
                    data={props.chartData}
                    width={100}
                    height={50}
                    options={{
                        title:{
                            display: displayTitle,
                            text:'Histograma',
                            fontSize: 36
                        },
                        legend:{
                            display: displayLegend,
                            position: legendPosition
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


export default Chart;