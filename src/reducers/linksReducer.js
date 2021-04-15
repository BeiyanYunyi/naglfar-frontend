const initialState = [
  {
    text: "综合测评",
    url: "/comprehensive",
    description: "因为题目不够就先综合了（屑颜）",
    color: "#E95800",
    img: "",
  },
/*  {
    text: "物理",
    url: "/phy",
    description: "大学物理，会卷你就来",
    color: "#095852",
    img: "",
  },
  {
    text: "化学",
    url: "/chem",
    description: "无机化学，会卷你就来",
    color: "#795800",
    img: "",
  },
  {
    text: "历史",
    url: "/history",
    description: "综合历史",
    color: "#002222",
    img: "",
    badge: true,
  },
  {
    text: "西方哲学 / 逻辑学",
    url: "/philosophy",
    description: "西方哲学 / 逻辑学",
    color: "#66CCFF",
    img: "",
  },
  {
    text: "马-恩-列-斯-毛-社会主义理论",
    url: "/maoism",
    description: "历史上影响力最大的的左翼理论",
    color: "#AA0000",
    img: "",
  },
  {
    text: "其它社会主义理论",
    url: "/socism",
    description:
      "包括但不限于：左翼无政府主义、空想（乌托邦）社会主义、国家社会主义等",
    color: "#DD0000",
    img: "",
  },*/
];

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDALINK": {
      return state.concat(action.data);
    }
    default: {
      return state;
    }
  }
};

export const addALink = (text, url, description, color, img) => {
  return {
    type: "ADDALINK",
    data: {
      text: text,
      url: url,
      description: description,
      color: color,
      img: img,
    },
  };
};

export default linksReducer;
