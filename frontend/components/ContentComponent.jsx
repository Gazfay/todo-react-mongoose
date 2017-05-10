import React from 'react';

class ContentComponent extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="body">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default ContentComponent;
