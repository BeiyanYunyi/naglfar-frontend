import { combineReducers, createStore } from "redux";
import historyReducer from "../reducers/historyReducer";
import linksReducer from "../reducers/linksReducer";
import shortAnswerReducer from "../reducers/shortAnswerReducer";
import singleChoiceReducer from "../reducers/singleChoiceReducer";
import subjectReducer from "../reducers/subjectReducer";
import themeReducer from "../reducers/themeReducer";
import titleReducer from "../reducers/titleReducer";

const reducer = combineReducers({
  singlechoices: singleChoiceReducer,
  shortanswers: shortAnswerReducer,
  title: titleReducer,
  links: linksReducer,
  theme: themeReducer,
  history: historyReducer,
  subject: subjectReducer,
});

const store = createStore(reducer);

export default store;
