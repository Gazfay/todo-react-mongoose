import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TopNavComponent from '../components/TopNavComponent.jsx'
import {addTodo, toggleTodo, deleteTodo, setVisibleFilter, editTodo} from './../actions/todoActions';

class TopNavContainer extends Component {
  constructor(props) {
    super(props);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    routerData: ownProps.routerData
  }
}



export default connect(mapStateToProps)(TopNavComponent);