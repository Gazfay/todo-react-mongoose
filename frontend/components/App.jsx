import React, { Component, PropTypes } from 'react'
import ContentComponent from '../components/ContentComponent.jsx';
import TopNavContainer from '../containers/TopNavContainer.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopNavContainer routerData={this.props} />
        <ContentComponent children={this.props.children} />
      </div>
    )
  }
}