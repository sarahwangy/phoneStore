import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ProductProvider,
  ModalProvider,
  ProductDetailProvider,
} from "./state-hooks/reducer-hook/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductDetailProvider>
      <ProductProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ProductProvider>
    </ProductDetailProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();