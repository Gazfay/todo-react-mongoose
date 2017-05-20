import React, { Component } from 'react'
import Todo from './TodoComponent.jsx'

class TodoListComponent extends Component {
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  renderTodos(todos) {
    if (this.props.loading === true) {
      return (<li className="no-todos">Loading...</li>)
    } else if (!!todos.length) {
      todos.filter((todo) => {
        if (this.props.filter == 'SHOW_ALL'){
          return todo;
        } else if (this.props.filter == 'SHOW_ACTIVE') {
          return todo.completed == false;
        } else if (this.props.filter == 'SHOW_COMPLETED') {
          return todo.completed == true;
        }
      });

      return todos.map(todo => {
        return <Todo
          key={todo.id}
          {...todo}
          toggleTodo={this.props.toggleTodo}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
        />
      });
    } else {
      return (<li className="no-todos">No tasks</li>)
    }
  }

  render() {
    return (
      <div className="col-md-8 col-md-push-2 todo-list-wrapper">
        <ul className="list-group">
          {this.renderTodos(this.props.todos)}
        </ul>
      </div>
    )
  }

}


export default TodoListComponent;