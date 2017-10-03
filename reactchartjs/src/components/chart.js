import React from 'react'
import {Bar} from 'react-chartjs-2'
import 'chartjs-plugin-annotation'
import TableItems from './tableItems'

const Chart = (props) => {

    const dataUnsorted = props.selectedGraph.set;
    const nombrePrueba = props.selectedGraph.name;
    // sort by value
    const data = dataUnsorted.sort(function (a, b) {
        return a.FECHARESULTADO - b.FECHARESULTADO;
    })
    const fechaResultado = data.map((e) => {
        return e.FECHARESULTADO
    });
    const resultado = data.map((e) => {
        return e.RESULTADO
    })

    const colorResultado = resultado.map((e) => {
        if (e < data[0].INFERIOR) {
            return '#FFDE21'
        } else if (e > data[0].SUPERIOR) {
            return '#D12229'
        } else {
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

    const chartData = {
        labels: fechaResultado,
        datasets: [{
            label: nombrePrueba,
            data: resultado,
            backgroundColor: colorResultado,
            borderColor: colorBorde,
            borderWidth: 1
        }]
    }
     const displayTitle  = true,
        displayLegend = false,
        legendPosition = 'right';
    

     const yMin = data[0].INFERIOR, yMax = data[0].SUPERIOR;

    let annotations= [{
         type: 'box',
         drawTime: 'beforeDatasetsDraw',
         id: 'region-1',
         mode: "horizontal",
         yScaleID: 'y-axis-0',
         yMin: yMin,
         yMax: yMax,
         backgroundColor: 'rgba(200,230,201,0.5)'
     }]

    const tableItems = props.selectedGraph.set.map((e) => {
        return(
            < TableItems key={e.NUMOT}item={e} />
        )
    })
        return(
            
            <div>
                <div className="Chart">
                    <Bar
                        data={chartData}
                        width={100}
                        height={50}
                        options={{
                            maintainAspectRatio:true,
                            title: {
                                display: displayTitle,
                                text: 'Histograma',
                                fontSize: 36
                            },
                            legend: {
                                display: displayLegend,
                                position: legendPosition
                            },
                            events: false,
                            tooltips:{
                                enabled: false
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            },
                            animation: {
                                onComplete: function () {
                                    var ctx = this.chart.ctx;
                                    ctx.textAlign = "center";
                                    ctx.textBaseline = "middle";
                                    var chart = this;
                                    var datasets = this.config.data.datasets;

                                    datasets.forEach(function (dataset, i) {
                                        ctx.font = "24px Lobster Two";
                                        ctx.fillStyle = "#4F4C4D";
                                        chart.getDatasetMeta(i).data.forEach(function (p, j) {
                                            ctx.fillText(datasets[i].data[j], p._model.x, p._model.y - 20);
                                        });
                                    });
                                }
                            }

                        }}
                    />
                </div>
                <div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Orden</th>
                                <th>Fecha</th>
                                <th>Resultado</th>
                                <th>Unidad</th>
                                <th>Referencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableItems}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }


export default Chart;