import { OPEN_MODAL, CLOSE_MODAL } from "../../constants/index";
import { useReducer, useContext, createContext } from "react";
// 动态的数据，state，不能直接引用 data 固定的值，要获取 context里面最新的productstate的值
import { storeProducts } from "../../data";

// 从同一文件夹里面引用 另一个 hook 的 context。。。！！！相当于redux 里面的状态互相引用共享
// 只不过usecontext 需要调成 上下级 子孙关系才可以。
// import { useProductState } from "./productList-hook";
//  actions

export const openModalType = (data) => ({ type: OPEN_MODAL, data });
export const closeModalType = () => ({ type: CLOSE_MODAL });

// 不建议用这种方法，因为这是modal 接收的是动态的 product state里面的值，不是store product里面固定写的值
// 比如后期会更新cart total count，这样就可以从product state里面获取最新的值
// export const getDetailDataAction = (dispatch) => {
//   return (id) => {
//     const findContent = storeProducts[id];
//     dispatch(getDetail(findContent));
//   };
// };

// // 比如后期会更新cart total count，这样就可以从product state里面获取最新的值
export const GetModalActions = (productState, dispatch) => {
  // 根据 ID find 匹配的值，用这些值更新 modal 页面 的action，进而更新state
  //   ，modal可以获取 modal state的值，渲染modal页面
  const getItem = (id) => productState.products.find((item) => item.id === id);

  const openModal = (id) => {
    const Modalitem = getItem(id);

    console.log("modal item", Modalitem);
    dispatch(openModalType(Modalitem));
  };

  const closeModal = () => {
    dispatch(closeModalType());
  };

  return {
    openModal,
    closeModal,
  };
};
