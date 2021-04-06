const initialState = [
  {
    stem: "TCP/IP协议模型分几层？",
    choice: ["3", "4", "5", "6"],
  },
  {
    stem: "奔腾处理器原来计划叫什么？",
    img:
      "https://cn.bing.com/th?id=OHR.HumpbackMom_ZH-CN0218207583_1920x1080.jpg",
    choice: ["8086", "80386", "80486", "80586"],
  },
];

const singleChoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ANSWERSC": {
      const objnum = action.data.objnum;
      const answerToChange = state[objnum];
      const changedAnswer = { ...answerToChange, answer: action.data.answer };
      return state.map((quest, questnum) =>
        questnum === objnum ? changedAnswer : quest
      );
    }
    case "ADDSC": {
      const newQuest = {
        stem: action.data.stem,
        img: action.data.img,
        choice: action.data.choice,
        correct: action.data.correct,
      };
      return state.concat(newQuest);
    }
    default: {
      return state;
    }
  }
};

export const answerSCQuestion = (objnum, value) => {
  return {
    type: "ANSWERSC",
    data: { objnum: objnum, answer: value },
  };
};

export const addSCQuestion = (stem, img, choice, correct) => {
  return {
    type: "ADDSC",
    data: { stem, img, choice, correct },
  };
};

export default singleChoiceReducer;
