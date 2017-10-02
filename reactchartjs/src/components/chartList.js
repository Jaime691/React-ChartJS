import React from 'react';
import Chart from './chart'

const Test = (props) => {
    const data = props.selectedGraph.set;
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
            label: 'Historico',
            data: resultado,
            backgroundColor: colorResultado,
            borderColor: colorBorde,
            borderWidth: 1
        }]
    }
    return (
        <div>
            <div>
                <Chart chartData={chartData} />
            </div>
        </div>
    );
}

export default Test;

