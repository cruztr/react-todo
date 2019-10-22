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
        this.setState(state => {
            const list = [...this.state.listItems, this.state.input];
            return {
                listItems : list,
                input : ''
            }
        });
    };

    renderListItems = () => {
        let listState = this.state.listItems;

        return listState.map((item) => {
            return <TodoItem itemValue={item} />
        });
    };

    render() {
        let listItems = this.renderListItems();
        console.log('in render ', listItems);
        return(
            <div className="todo">
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.addTodoItem}>
                    Add item
                </button>

               <ul>
                   {listItems}
               </ul>

            </div>
        );
    }
}

export default todoList;