import React from 'react';
import './todoItem.css';


class todoItem extends React.Component {
    render() {
        return(
            <div>
                <input type="checkbox" checked={this.props.isChecked}/>
                <label>{this.props.itemValue}</label>
            </div>
        );
    }

}

export default todoItem;