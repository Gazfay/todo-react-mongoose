import React, { Component } from 'react'

class AddInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.setInputValue = this.setInputValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  setInputValue(e) {
    this.setState({text: e.target.value})
  }

  addTodo(e) {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.addTodo(this.state.text);
      this.setState({text: ''});
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-push-3">
          <form onSubmit={this.addTodo}>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Task text" value={this.state.text} onChange={this.setInputValue}/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">add</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddInputComponent;