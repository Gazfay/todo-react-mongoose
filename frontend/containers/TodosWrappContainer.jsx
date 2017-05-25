import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TodoListComponent from './../components/TodoListComponent.jsx';
import TodosWrappComponent from './../components/TodosWrappComponent.jsx';
import {getTodos, addTodo, toggleTodo, deleteTodo, setVisibleFilter, editTodo} from './../actions/todoActions';

const getVisibleTodos = (todos, filter) => {
  let resultTodos;

  switch (filter) {
    case 'SHOW_ALL':
      resultTodos = todos;
      break;
    case 'SHOW_ACTIVE':
      resultTodos = todos.filter(todo => !todo.completed);
      break;
    case 'SHOW_COMPLETED':
      resultTodos = todos.filter(todo => todo.completed);
      break;
  }


  return resultTodos.sort((a,b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos.todos, state.filter),
    filter: state.filter,
    loading: state.todos.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos:() => {
      dispatch(getTodos());
    },
    addTodo:(text) => {
      dispatch(addTodo(text));
    },
    toggleTodo:(id, completed) =>{
      dispatch(toggleTodo(id, completed));
    },
    deleteTodo:(id) => {
      dispatch(deleteTodo(id));
    },
    setVisibleFilter:(filter) => {
      dispatch(setVisibleFilter(filter));
    },
    editTodo:(id, text) => {
      dispatch(editTodo(id, text));
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodosWrappComponent);