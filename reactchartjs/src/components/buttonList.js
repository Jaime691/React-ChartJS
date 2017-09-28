import React, { Component } from 'react';
import ButtonListItem from './button';

const ButtonList = (props) => {
    const graphItems = props.graphs.graphs.map((graph) => {
        return <ButtonListItem
            graphSelect={props.graphSelect}
            key={graph.id}
            graph={graph} />
    })
        return (
                <ul className="list-group">
                    {graphItems}
                </ul>
        );
}

export default ButtonList;