import React from 'react';


class todoItem extends React.Component {
    render() {
        return(
            <div>
                <input type="checkbox"/>
                <span>this.props.itemValue</span>
            </div>
        );
    }

}

export default todoItem;