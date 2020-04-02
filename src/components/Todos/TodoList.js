import React from 'react';
import TodoForm from './TodoForm';

class TodoList extends React.Component{
   
    state = { todos: [] };

    onTermSubmit = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    deleteTodo = (id) => {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id )});
    }

    renderTodos = () => {
        return this.state.todos.map(todo=> {
            return (
                <div className="item" key={todo.id}>{todo.text}
                    <div className="ui right floated">
                        <button className="ui button negative" onClick={()=>{this.deleteTodo(todo.id)}}>Delete</button>
                    </div>
                </div>
            );
        });
        
    };

    render() {
        return (
        <div className="ui field">
            <TodoForm onTermSubmit={this.onTermSubmit}/>
            <div className="ui middle aligned divided big list">
                {this.renderTodos()}
            </div>
        </div>
        );
    }
}

export default TodoList;