const initialState = [];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONCATHISTORY": {
      return state.includes(action.data) ? state : state.concat(action.data);
    }
    case "CLEARHISTORY": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export const concatHistory = (value) => {
  return {
    type: "CONCATHISTORY",
    data: value,
  };
};

export const clearHistory = (value) => {
  return {
    type: "CLEARHISTORY",
    data: value,
  };
};

export default historyReducer;
