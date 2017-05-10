import React from 'react';
import { Route, IndexRoute } from 'react-router';
import TodosWrappContainer from './containers/TodosWrappContainer.jsx';
import AboutComponent from './components/AboutComponent.jsx';
import App from './components/App.jsx'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodosWrappContainer}/>
    <Route path="/about" component={AboutComponent}/>
  </Route>
)