import { combineReducers } from "redux";
import userReducer from "./userReducer";
import gameReducer from "./gameReducer";

const reducers = combineReducers({
  user: userReducer,
  game: gameReducer,
});

export default reducers;
