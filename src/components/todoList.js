import React from 'react';
import TodoItem from './todoItem'


class todoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input : "",
            listItems : []
        };
    }

    handleChange = (event) => {
        this.setState({input : event.target.value});
    };

    addTodoItem = () => {
        if(this.state.input) {
            this.setState(state => {
                const updatedList = [...this.state.listItems, {value:this.state.input, isChecked:false}];
                return {
                    listItems: updatedList,
                    input: ''
                }
            });
        }
    };

    renderListItems = () => {
        let listState = this.state.listItems;

        return listState.map((item) => {
            return <TodoItem itemValue={item.value} checked={item.isChecked}/>
        });
    };

    render() {
        let listItems = this.renderListItems();
        return(
            <div className="todo">
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.addTodoItem}>
                    Add item
                </button>

               <ul className="todos-ul">
                   {listItems}
               </ul>

            </div>
        );
    }
}

export default todoList;