import CartBottom from "./cartBottom";
import CartList from "./cartList";
import CartHead from "./cartHeader";

//  ??? 用import还是export？
import CartProduct from "./cartProduct";
import CartEmpty from "./cartEmpty";

// 之前的是 export default，现在在index里面多个export，那么在cart page 引用的时候，是
// 加 { } 还是不加？？

export { CartBottom, CartList, CartHead, CartProduct, CartEmpty };
