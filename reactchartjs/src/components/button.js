
import React from 'react';

const ButtonListItem = ({graph, graphSelect }) => {
    return (
        <li
            onClick={() => graphSelect(graph)}
            className="list-group-item">{graph.name}
        </li>
    );
}

export default ButtonListItem;