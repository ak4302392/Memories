import {
  CREATE,
  DELETE,
  FETCH_ALL,
  UPDATE,
  LIKE,
} from "../constants/actionTypes";

const actions = (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
export default actions;
