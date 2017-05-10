import React, { Component } from 'react';
import TodoListComponent from './TodoListComponent.jsx';
import AddInputComponent from './AddInputComponent.jsx';
import FilterComponent from './FilterComponent.jsx';


const TodosWrappComponent = ({todos, addTodo, toggleTodo, deleteTodo, setVisibleFilter, filter, editTodo}) => {
  return (
    <div>
      <AddInputComponent addTodo={addTodo} />
      <FilterComponent setVisibleFilter={setVisibleFilter} filter={filter} />
      <TodoListComponent todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} filter={filter} editTodo={editTodo} />
    </div>
  )

}

export default TodosWrappComponent;