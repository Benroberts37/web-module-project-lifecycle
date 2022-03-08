import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
     <form id='todoForm' onSubmit={this.props.onTodoFormSubmit} >
        <input value = {this.props.state.todoNameInput} 
          onChange={this.props.onTodoNameInputChange} 
          type = 'text' 
          placeholder = 'Type todo'></input>
        <input type = 'submit'></input>
    </form>
  <button 
    onClick={this.props.toggleDisplayCompleteds}>{this.props.state.displayCompleteds ? 'Hide' : 'Show'}Completed</button>
    </>
    )
  }
}

