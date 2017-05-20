import React, { Component } from 'react';
import TodoListComponent from './TodoListComponent.jsx';
import AddInputComponent from './AddInputComponent.jsx';
import FilterComponent from './FilterComponent.jsx';


const TodosWrappComponent = ({getTodos, todos, addTodo, toggleTodo, deleteTodo, setVisibleFilter, filter, editTodo, loading}) => {
  return (
    <div>
      <AddInputComponent addTodo={addTodo} />
      <FilterComponent setVisibleFilter={setVisibleFilter} filter={filter} />
      <TodoListComponent 
        getTodos={getTodos}
        todos={todos} 
        toggleTodo={toggleTodo} deleteTodo={deleteTodo} 
        filter={filter} 
        editTodo={editTodo} 
        loading={loading}
      />
    </div>
  )

}

export default TodosWrappComponent;