import request from 'superagent';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function fetchComments(){
  const pack = request("GET", 'http://jsonplaceholder.typicode.com/posts/1/comments').end(callback)

  console.log(pack);
}
