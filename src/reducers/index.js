import { combineReducers } from 'redux';
import CommentsReducer from './reducer-comments';

const rootReducer = combineReducers({
  comments: CommentsReducer
});

export default rootReducer;
