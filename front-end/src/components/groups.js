import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getGroup from '../actions/getGroup'

class Groups extends Component {
  changePlaylist(event) {
    this.props.getGroup(event)
  }


  render() {
    let buttonList = this.props.groups.map(group => {
      if (group.id !== this.props.group.id) {
        return <button key={group.id} className="button-primary" onClick={this.changeGroup.bind(this, group.id)}>{group.name}</button>
      }
    })
    return(
      <div>
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
