import { deleteArrayElements } from "../utils/deleteArrayElement";

const initialState = [
  {
    stem: "“无知之幕”的概念出自？",
    img: "",
    choice: [
      "《资本论》——马克思",
      "《正义论》——罗尔斯",
      "《逻辑哲学论》——维特根斯坦",
      "《君主论》——马基雅维利",
    ],
    correct: "《正义论》——罗尔斯",
  },
  {
    stem: "世界上应用最广泛的音律制是？",
    img: "",
    choice: ["十二平均律", "十六平均律"],
    correct: "十二平均律",
  },
  {
    stem:
      "“生产的发展和私有制的产生，使人类脱离了‘自然状态’，产生了贫富不均的社会现象”，这种说法最早出自？",
    img: "",
    choice: [
      "《德意志意识形态》——马克思",
      "《共产党宣言》——马克思、恩格斯",
      "《论人类不平等的起源和基础》——卢梭",
      "《纯粹理性批判》——康德",
    ],
    correct: "《论人类不平等的起源和基础》——卢梭",
  },
  {
    stem:
      "《共产党宣言》认为，工人革命的第一步就是使无产阶级上升为统治阶级，争得（）",
    img: "",
    choice: ["自由", "平等", "财富", "民主"],
    correct: "民主",
  },
  {
    stem: "TCP/IP协议模型分几层？",
    choice: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    stem: "奔腾处理器原来计划叫什么？",
    img:
      "https://cn.bing.com/th?id=OHR.HumpbackMom_ZH-CN0218207583_1920x1080.jpg",
    choice: ["8086", "80386", "80486", "80586"],
    correct: "80586",
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
    case "DELSC": {
      const changedQuests = deleteArrayElements(state, action.data.indexAry);
      return changedQuests;
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

export const delSCQuestion = (indexAry) => {
  return {
    type: "DELSC",
    data: { indexAry },
  };
};

export default singleChoiceReducer;
