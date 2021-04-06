import mycolor from "../styles/theme.json";
import { createMuiTheme } from "@material-ui/core";

const initialState = createMuiTheme(mycolor);

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGETHEME": {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

export const changeTheme = (value) => {
  return {
    type: "CHANGETHEME",
    data: value,
  };
};

export default themeReducer;
