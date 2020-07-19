import { createStore } from "redux";

function reducer(
  state = {
    status: 0,
    email: "로그인이 필요합니다.",
    pageNum: 1,
  },
  action
) {
  switch (action.type) {
    case "IS_LOGINED":
      return {
        ...state,
        status: true,
        email: action.email,
      };
    case "LogOut":
      return {
        ...state,
        status: false,
        email: "로그인이 필요합니다.",
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        pageNum: action.pageNum,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
