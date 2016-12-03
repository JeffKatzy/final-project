import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render(){
    return(
      <div>
        HEHE HOMEPAGE
      </div>)
  }
}

function mapStateToProps(state){
  return {users: state.users }
}


export default connect(mapStateToProps)(HomePage)
