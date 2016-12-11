import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getGroup from '../actions/getGroup'
import destroyMessage from '../actions/destroyMessage'
import addMessage from '../actions/addMessage'



class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {messageText: ''}
    this.chatOwner = this.chatOwner.bind(this)
  }

  handleDestroy(event) {
    this.props.destroyMessage(event, this.props.group)
  }

  chatOwner(message) {
    if (message.userId === this.props.user) {
      return <span className="glyphicon glyphicon-remove" onClick={this.handleDestroy.bind(this, message.id)}>{message.text}</span>
    } else {
      return <span >{message.text}</span>
    }
  }


  handleText(event){
    this.setState({messageText: event.target.value})
  }

  handleMessage() {
    event.preventDefault()
    this.props.addMessage(this.state.messageText, this.props.user, this.props.group)
    document.getElementById("message-text").value = ""
  }

  render() {
    let chat = this.props.chat.map(message => {
      return (
        <div key={message.id}>
          <li>{message.name}: {}</li>
        </div>
      )
    })
    let groupName = this.props.groups.filter(group => group.id === this.props.group).name

    return(
      <div>
        <h4>{groupName} Chat</h4>
        <form onSubmit={this.handleMessage.bind(this)} className="input-group">
          <input id="message-text" type="text" className="form-control" placeholder="Type message" onChange={this.handleText.bind(this)} />
          <span className="input-group-btn">
            <input className="btn btn-success" type="submit" value="Search" />
          </span>
        </form>
        <ul>
          {chat}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {chat: state.chat, user: state.user, group: state.group, groups: state.groups}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getGroup, destroyMessage, addMessage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
