import { combineReducers } from "redux";
import authReducer from "./Auth";
import posts from "./posts";
export default combineReducers({
  posts,
  authReducer,
});
