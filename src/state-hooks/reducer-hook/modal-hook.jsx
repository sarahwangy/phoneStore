import { OPEN_MODAL, CLOSE_MODAL } from "../../constants/index";
import { useReducer, useContext, createContext } from "react";
// 动态的数据，state，不能直接引用 data 固定的值，要获取 context里面最新的productstate的值
import { storeProducts } from "../../data";

// 从同一文件夹里面引用 另一个 hook 的 context。。。！！！相当于redux 里面的状态互相引用共享
// 只不过usecontext 需要调成 上下级 子孙关系才可以。
import { useProductState } from "./productList-hook";
import { GetModalActions } from "../actions/modalAction";

// reducer

const initialState = {
  openModal: false,
  Modalproduct: {},
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      console.log("action data modal", action.data);
      return { openModal: true, Modalproduct: action.data };
    case CLOSE_MODAL:
      return { openModal: false, Modalproduct: {} };
    default:
      return state;
  }
};

// use context
export const ModalContext = createContext(initialState);

export const useModalState = () => {
  return useContext(ModalContext);
};

//  use reducer
export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const { productState } = useProductState();
  // Actions是lDataAction 返回的函数。。。
  const ModalActions = GetModalActions(productState, dispatch);
  return (
    <ModalContext.Provider value={{ ModalState: state, ModalActions }}>
      {children}
    </ModalContext.Provider>
  );
};
