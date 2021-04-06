const initialState = "纳斯卡移民局";

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGETITLE": {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

export const changeTitle = (value) => {
  return {
    type: "CHANGETITLE",
    data: value,
  };
};

export default titleReducer;
