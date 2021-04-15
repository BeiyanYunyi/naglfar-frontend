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
    correct: "$2a$08$PW8xnEQ.ENG1yLyxl0VIfOZ6HDydZsVE/2nMTPNXXl4EaN8IpFt1i",
  },
  {
    stem: "现代钢琴使用哪种律制校音？",
    img: "",
    choice: ["十二平均律", "五度相生律", "纯律", "中庸全音平均律"],
    correct: "$2a$08$o5ud0nBcuT.J/61v9TUSMu7r/3vkkB9jap3vPyu.nKlGzZ4TOLCxO",
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
    correct: "$2a$08$ekrM.I4WwvX9AEeH4itdVusu.c./gi7ntNqo/8f/QYhKWPn6NdoAi",
  },
  {
    stem:
      "《共产党宣言》认为，工人革命的第一步就是使无产阶级上升为统治阶级，争得（）",
    img: "",
    choice: ["自由", "平等", "财富", "民主"],
    correct: "$2a$08$7n4QqL061imBYKg59sVJEO10JQC7/QKKVhZZO.LhFW8JzbFDmegHK",
  },
  {
    stem: "以下河流按照入海口从西向东排列，顺序正确的是：",
    choice: [
      "涅瓦河 鄂毕河 勒拿河 叶尼塞河",
      "塞纳河 莱茵河 易北河 维斯瓦河",
      "多瑙河 顿河 第聂伯河 德涅斯特河",
      "恒河 印度河 湄公河 红河",
    ],
    correct: "$2a$08$1DBCQGncWBD77o8AiUHK.ORttETIHu5XnUEa2t9XwH6Lu1B1SN6Iq",
  },
  {
    stem: "中国人均国内生产总值突破____美元",
    choice: ["八千", "八万", "八百万", "八千万"],
    correct: "$2a$08$O91bouy5YX.A9bIrfYWR2euYzsB05hMZhdUMw7MViF8FfqZquEy4q",
  },
  {
    stem: "TCP/IP协议模型分几层？",
    choice: ["3", "4", "5", "6"],
    correct: "$2a$08$6MIxknUxcXurMDerDrG5OOIsTIy/5xp/8Ytjqk7.sUBUVw50nt2oC",
  },
  {
    stem: "奔腾处理器原来计划叫什么？",
    choice: ["8086", "80386", "80486", "80586"],
    correct: "$2a$08$X1.j5Fu3DFUe3PDUUvcPBOqPcOPfRmpSIJU2vu3r/w6H2pJXwM2.a",
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
