import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchComments} from '../actions/index';

class CommentFeed extends Component{
  componentWillMount(){
    this.props.fetchComments();
  }

  renderComments(){
    return this.props.comments.map((comment) => {
      return(
        <li className="list-group-item">
          {comment.name}
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        {this.renderComments()}
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('_______'+state.comments.all);
  return {comments: state.comments.all}
}

export default connect(mapStateToProps, {fetchComments: fetchComments})(CommentFeed);
