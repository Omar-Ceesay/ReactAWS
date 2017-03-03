import axios from 'axios';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const GET_COMMENT = "GET_COMMENT";

export function fetchComments(){
  const request = axios.get('http://jsonplaceholder.typicode.com/posts/1/comments');

   return{
     type: FETCH_COMMENTS,
     payload: request
   };
}
export function getComment(id){
  const request = axios.get(`http://jsonplaceholder.typicode.com/posts/1/comments?id=${id}`);

   return{
     type: GET_COMMENT,
     payload: request
   };
}
