import {
  ADD_ITEM_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_TOTALS,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from "../../constants";

export const getCartActions = ({ productState, cartState }, dispatch) => {
  // Get item by id
  const getItem = (id) => productState.products.find((item) => item.id === id);

  const addItemToCart = (id) => {
    let tempProducts = [...productState.products];

    const index = tempProducts.indexOf(getItem(id));

    const tempProduct = tempProducts[index];
    tempProduct.inCart = true;
    tempProduct.count = 1;
    const price = tempProduct.price;
    tempProduct.total = price;

    // cartState.cart？？？
    const tempCart = [...cartState.cart, tempProduct];
    dispatch({
      type: ADD_ITEM_TO_CART,
      data: tempCart,
    });
  };

  const addTotals = () => {
    let subtotal = 0;

    // 这个total 和 初始值里面的total ？？====>3
    cartState.cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.1;

    const tax = parseFloat(tempTax.toFixed(3));
    const total = subtotal + tax;
    dispatch({
      type: ADD_TOTALS,
      data: { subtotal, tax, total },
    });
  };

  const removeItemFromCart = (id) => {
    let tempProducts = [...productState.products];
    let tempCart = [...cartState.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));

    let removedProduct = tempProducts[index];

    //  可以直接这样把，不用 index of ？？ ====4
    // let removedProduct = tempCart;

    removedProduct.inCart = false;
    // 定义这些是干什么？？
    removedProduct.count = 0;
    removedProduct.total = 0;
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      data: tempCart,
    });
    addTotals();
  };

  const clearCart = (cart) => {
    dispatch({ type: CLEAR_CART });
    addTotals();

    //可以调用remove的方法吗？？  1==
    // Cheating because it's referencing product state objects directly
    cart.forEach((item) => {
      item.inCart = false;
      item.count = 0;
      item.total = 0;
    });
  };

  // Incrementing/Decrementing values in the cart
  const inc = (id) => {
    let tempCart = [...cartState.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    // const index = tempCart.indexOf(selectedProduct);
    // const product = tempCart[index];
    selectedProduct.count += 1;
    //  total ???  ===2
    selectedProduct.total = selectedProduct.count * selectedProduct.price;
    dispatch({
      type: INCREMENT_ITEM,
      data: tempCart,
    });
    addTotals();
  };

  const dec = (id) => {
    let tempCart = [...cartState.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      removeItemFromCart(id);
    } else {
      product.total = product.count * product.price;
      dispatch({
        type: DECREMENT_ITEM,
        data: tempCart,
      });
      addTotals();
    }
  };
  return {
    addItemToCart,
    removeItemFromCart,
    inc,
    dec,
    addTotals,
    clearCart,
  };
};
