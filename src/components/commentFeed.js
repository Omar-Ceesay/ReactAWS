import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchComments} from '../actions/index';

class CommentFeed extends Component{
  componentWillMount(){
    this.props.fetchComments();
  }

  renderComments(){
    return this.props.comments.map((comment) => {
      return(
        <li className="list-group-item">
          <Link to={"/comment/"+comment.id}>
            <h3 className="text-primary">{comment.name}</h3>
          </Link>
            <h6 className="">{comment.body}</h6>
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
