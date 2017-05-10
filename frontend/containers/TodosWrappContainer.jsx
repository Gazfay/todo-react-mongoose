import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TodoListComponent from './../components/TodoListComponent.jsx';
import TodosWrappComponent from './../components/TodosWrappComponent.jsx';
import {addTodo, toggleTodo, deleteTodo, setVisibleFilter, editTodo} from './../actions/todoActions';

class TodosWrappContainer extends Component {
  constructor(props) {
    super(props);
  }

}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter),
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo:(text) => {
      dispatch(addTodo(text));
    },
    toggleTodo:(id) =>{
      dispatch(toggleTodo(id));
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