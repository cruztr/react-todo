import React from 'react';
import TodoItem from './todoItem'
import './todoList.css';


class todoList extends React.Component{
    state = {
        input : "",
        listItems : []
    };

    handleChange = (event) => {
        this.setState({input : event.target.value});
    };

    addTodoItem = () => {
        if(!this.state.input)
            return;

        this.setState(state => {
            const updatedList = [...this.state.listItems, {value:this.state.input, isChecked:false}];
            return {
                listItems: updatedList,
                input: ''
            }
        });

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
                <button onClick={this.addTodoItem}>Add item</button>

               <div className="todos-container">
                   {listItems}
               </div>

            </div>
        );
    }
}

export default todoList;