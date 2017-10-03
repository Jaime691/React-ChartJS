import React from 'react';
import Chart from './chart'

const ChartList = (props) => {
    const listOfCharts = props.graphs.map((graph) => <Chart key={graph.id}selectedGraph={graph} />)
    return (
        <div>
            <div>
                {listOfCharts}
            </div>
        </div>
    );
}

export default ChartList;

