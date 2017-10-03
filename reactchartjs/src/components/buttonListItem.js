
import React, {Component} from 'react';


class ButtonListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked : false
        }
    }

    render() {
        return (

            <li className="list-group-item">
                <input value={this.state.checked} type="checkbox" onChange={() => this.props.updateGraphs(this.props.graph )}/>&nbsp;{this.props.graph.name}
            </li>
        );
    }
}

export default ButtonListItem;

// const ButtonListItem = ({graph, graphSelect, checked }) => {
//     console.log(checked)
//     return (
//         <li className="list-group-item">
//             <input type="checkbox" onClick={() => graphSelect(graph)} />&nbsp;{graph.name}
//         </li>
//     );
// }
// export default ButtonListItem;

