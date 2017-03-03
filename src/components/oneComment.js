import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getComment} from '../actions/index';

class OneComment extends Component{
  componentWillMount(){
    this.props.getComment(this.props.params.id);
  }
  render(){
    const comment = this.props.comment;
    console.log(this.props.comment);

    if(!comment){
      return(
        <div>Loading...</div>
      )
    }

    return(
      <div>
        <h3>{comment.name}</h3>
        <h5 className="">{comment.email}</h5>
        <h6>{comment.body}</h6>
        <Link to="/">Home</Link>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {comment: state.comments.indiv}
}

export default connect(mapStateToProps, {getComment: getComment})(OneComment);
