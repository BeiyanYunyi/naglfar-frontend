import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import linksReducer from "../reducers/linksReducer";
import shortAnswerReducer from "../reducers/shortAnswerReducer";
import singleChoiceReducer from "../reducers/singleChoiceReducer";
import themeReducer from "../reducers/themeReducer";
import titleReducer from "../reducers/titleReducer";
import historyReducer from "../reducers/historyReducer";

const reducer = combineReducers({
  singlechoices: singleChoiceReducer,
  shortanswers: shortAnswerReducer,
  title: titleReducer,
  links: linksReducer,
  theme: themeReducer,
  history: historyReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
