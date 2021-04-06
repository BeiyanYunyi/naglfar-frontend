const initialState = [
  {
    stem: "简述什么是非对称加密？",
    img:
      "https://cn.bing.com/th?id=OHR.HumpbackMom_ZH-CN0218207583_1920x1080.jpg",
  },
  { stem: "编写这个网页用到了哪些语言？" },
];

const shortAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ANSWERSA": {
      const objnum = action.data.objnum;
      const answerToChange = state[objnum];
      const changedAnswer = { ...answerToChange, answer: action.data.answer };
      return state.map((quest, questnum) =>
        questnum === objnum ? changedAnswer : quest
      );
    }
    case "ADDSA": {
      const newQuest = {
        stem: action.data.stem,
        img: action.data.img,
      };
      return state.concat(newQuest);
    }
    default: {
      return state;
    }
  }
};

export const answerSAQuestion = (objnum, value) => {
  return {
    type: "ANSWERSA",
    data: { objnum: objnum, answer: value },
  };
};

export const addSAQuestion = (stem, img) => {
  return {
    type: "ADDSA",
    data: { stem, img },
  };
};

export default shortAnswerReducer;
