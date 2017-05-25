import React, {Component} from 'react'
import moment from 'moment';
import classnames from 'classnames';


class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: props.text
    }

    this.clickDelete =  this.clickDelete.bind(this);
    this.changeToggle = this.changeToggle.bind(this);
    this.changeEditing = this.changeEditing.bind(this);
    this.changeTextTodo = this.changeTextTodo.bind(this);
    this.saveEditingText = this.saveEditingText.bind(this);
    this.renderUpdateIcon = this.renderUpdateIcon.bind(this);
  }

  changeToggle(id) {
    this.props.toggleTodo(id, !this.props.completed);
  }

  clickDelete(id) {
    this.props.deleteTodo(id);
  }

  changeEditing() {
    if (!this.props.completed) {
      this.setState({editing: !this.state.editing});
    }
  }

  editText() {
    this.changeEditing();
    this.setState({text: this.props.text});
  }

  changeTextTodo(e) {
    this.setState({text: e.target.value});
  }

  renderUpdateIcon() {
    console.log(new Date(this.props.createdAt).getTime() != new Date(this.props.updatedAt).getTime(), 'reupdate');
    if (new Date(this.props.createdAt).getTime() != new Date(this.props.updatedAt).getTime()) {
      return (
        <i className="fa fa-pencil update-pencil" aria-hidden="true"></i>
      )
    } 
  }

  saveEditingText(e) {
    e.preventDefault();
    console.log(this.state.text.trim());
    if (this.state.text.trim() !== '') {
      this.props.editTodo(this.props.id, this.state.text);
      this.setState({editing: false});
    }
  }

  renderTextFiled() {
    if (this.state.editing) {
      return (
        <div className="input-group editing-input">
          <input type="text" className="form-control" autoFocus style={{height: 22, fontSize: 13}} value={this.state.text} onKeyPress={this.enterAdd} onChange={this.changeTextTodo}/>
          <span className="input-group-btn">
            <button className="btn btn-default btn-edit" style={{height: 20}} type="submit">edit</button>
          </span>
        </div>
      );
    } else if (!this.state.editing) {
      return (
        <span className={classnames({'completed-text': this.props.completed})} title="Double click for edit" onDoubleClick={this.changeEditing}>{this.props.text}</span>
      );
    }
  }

  render() {
    return (
      <li className="list-group-item">
        <form onSubmit={this.saveEditingText}>
          <div className="row">
            <div className="col-md-12 todo-content">
              <div style={{display: 'flex'}}>
                <input type="checkbox" checked={this.props.completed} className="todo-checkbox" onChange={()=> {this.changeToggle(this.props.id)}}/>
                {this.renderTextFiled()}
              </div>
              <div>
                {this.renderUpdateIcon()}
                <span>{moment(this.props.createdAt).format('MM.DD.YYYY HH:mm')}</span>
                <i className="fa fa-window-close fa-lg close-icon" aria-hidden="true" onClick={()=> {this.clickDelete(this.props.id)}}></i>
              </div>
            </div>
          </div>
        </form>
      </li>
    );
  }
}

export default TodoComponent;