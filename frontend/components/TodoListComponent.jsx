import React from 'react'
import Todo from './TodoComponent.jsx'

const TodoListComponent = ({ todos, toggleTodo, deleteTodo, filter, editTodo }) => {

  const renderTodos = (todos) => {
    if (!!todos.length) {
      todos.filter((todo) => {
        if (filter == 'SHOW_ALL'){
          return todo;
        } else if (filter == 'SHOW_ACTIVE') {
          return todo.completed == false;
        } else if (filter == 'SHOW_COMPLETED') {
          return todo.completed == true;
        }
      });

      return todos.map(todo => {
        return <Todo
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      });
    } else {
      return (<li className="no-todos">No tasks</li>)
    }
  };


  return (
    <div className="col-md-8 col-md-push-2 todo-list-wrapper">
      <ul className="list-group">
        {renderTodos(todos)}
      </ul>
    </div>
  )
};

export default TodoListComponent;