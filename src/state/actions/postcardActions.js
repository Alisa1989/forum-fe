import axios from "axios";

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = ' GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';


// export const getPosts = () => {
//         return {type: GET_POSTS_START}
// };

export const getPosts = () => (dispatch) => {
    console.log("getting Posts");
    dispatch({type: GET_POSTS_START});
    axios
        .get ("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> {
            dispatch({ type: GET_POSTS_SUCCESS, payload: response.data});
            console.log("API response", response.data);
        })
        .catch((error) => {
            dispatch({type: GET_POSTS_FAILURE, payload: `${error.response.message} code: ${error.response.code}`});
            console.log(error);
        })
};


// export const getPosts = () => async dispatch => {
//     try {
//       const res = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       console.log("actions", res.data)
//       dispatch({
//         type: GET_POSTS_SUCCESS,
//         payload: res.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: GET_POSTS_FAILURE,
//         payload: console.log(error),
//       });
//     }
//   };