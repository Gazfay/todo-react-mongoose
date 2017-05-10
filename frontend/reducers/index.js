import {combineReducers} from 'redux';
import filter from './filterReducer';
import todos from './todosReducer';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  filter,
  todos,
  routing: routerReducer
});

export default rootReducer;