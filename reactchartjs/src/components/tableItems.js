import React from 'react';
import classnames from 'classnames'
import '../style/table.css'

const TableItems = (props) =>{
    return (
        <tr>
            <td>{props.item.NUMOT}</td>
            <td>{props.item.FECHARESULTADO}</td>
            <td className={classnames({ "table-red-mark": props.item.RESULTADO < props.item.INFERIOR || props.item.RESULTADO > props.item.SUPERIOR })}>{props.item.RESULTADO}</td>
            <td>Unidad</td>
            <td>{props.item.INFERIOR} - {props.item.SUPERIOR}</td>
        </tr>
    )
}

export default TableItems;