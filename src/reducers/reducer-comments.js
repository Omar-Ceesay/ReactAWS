import {FETCH_COMMENTS, GET_COMMENT} from '../actions/index';

const INITIAL_STATE = {all: [], indiv: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_COMMENTS:
      return {...state, all: action.payload.data};
    case GET_COMMENT:
      return {...state, indiv: action.payload.data[0]};
    default:
      return state;
  }
}
