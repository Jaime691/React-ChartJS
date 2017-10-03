import React, {Component} from 'react';
import ButtonListItem from './buttonListItem';

class ButtonList extends Component {
    render(){
        const buttonItems = this.props.graphs.map((graph) => {
            return <ButtonListItem
                updateGraphs={this.props.updateGraphs}
                key={graph.id}
                graph={graph}/>
        })
        return(
            <ul className="list-group">
                {buttonItems}
            </ul> 
        );
    }
}

export default ButtonList;