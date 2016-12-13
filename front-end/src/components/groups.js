import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getGroup from '../actions/getGroup'

class Groups extends Component {
  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }
  changeGroup(event) {
    this.props.getGroup(event)
//     try to avoid directly manipulating the dom - instead should just change the state.
//     And rendering should reference the state.
    document.getElementsByClassName("group-selector")[0].value = ""
  }

  fetch() {
    this.props.getGroup(this.props.group)
  }

  render() {
    // setInterval(this.fetch, 10000)

    let buttonList = this.props.groups.map(group => {
      if (group.group_id !== parseInt(this.props.group, 10)) {
        return (<button key={group.group_id} className="btn btn-success" onClick={this.changeGroup.bind(this, group.group_id)}>{group.group_name}</button>)
      } else {
        return null
      }
    })

    return(
      <div className="group-selector">
        {buttonList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {group: state.group, groups: state.groups}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getGroup}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups)
