import { GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from "../actions/postcardActions";

export const initialState ={
    isFetching: false,
    posts:[{
        userId: "userId",
        id: "id",
        title: "title",
        body: "body"
      }],
      error: ""
    }

export const postcardReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_POSTS_START:
            console.log("getposts in postcard reducer")
            return {...state, 
            isFetching: true};
        case GET_POSTS_SUCCESS:
            return {...state, 
            isFetching: false,
            posts: action.payload};
        case GET_POSTS_FAILURE:
            return {...state, 
            isFetching: false,
            error: action.payload};
        default:
            return state;
    }
}
