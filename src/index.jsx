import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ProductProvider,
  ModalProvider,
  ProductDetailProvider,
  CartProvider,
} from "./state-hooks/reducer-hook/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* // 这里可以直接引用StateProvider ，里面包含了其他三个provider */}
    <ProductDetailProvider>
      <ProductProvider>
        <CartProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </CartProvider>
      </ProductProvider>
    </ProductDetailProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
