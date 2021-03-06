import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import {
  ListComponentWrapper,
  Content,
  BottomWrapper,
  Price,
  ListTitle,
  ImageWrapper,
  Category,
  Image,
  CartWrapper,
  ProductWrapper,
} from "./style";
import { useModalState } from "../../state-hooks/reducer-hook/modal-hook";
import { useCartState } from "../../state-hooks/reducer-hook/cart-hook";

export default function ProductComponent(props) {
  console.log(props, "props com");

  const { ModalActions } = useModalState();
  const { openModal } = ModalActions;
  const { CartActions, CartState } = useCartState();
  const { addItemToCart } = CartActions;

  // console.log(JSON.stringify(props), "json string props")
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
          marginBottom: "40px",
        }}
      >
        Our Products
      </h1>
      <ProductWrapper>
        {props.products.map((product) => {
          console.log("product ...", product);
          return (
            // link后 里面的子 div 文字变成了 a 标签 带下划线，用style={{ textDecoration: 'none' }} 可以去除下划线
            // https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router
            <>
              <ListComponentWrapper>
                <Content>
                  <ImageWrapper>
                    {/* link只放在image 下面，点击image才会跳转detail，而不是包裹在整体contain下面 */}
                    <Link
                      to={`/detail/${product.id}`}
                      key={product.id}
                      style={{ textDecoration: "none", margin: "10px 20px" }}
                    >
                      <Image src={product.img} alt={product.title} />
                      {/* cart  可以放在image这里包裹，这样一开始隐藏，后面可以transform改变位置，显示在image旁边*/}
                    </Link>

                    <CartWrapper
                      disabled={product.inCart}
                      onClick={() => {
                        openModal(product.id);
                        addItemToCart(product.id);
                      }}
                    >
                      {product.inCart ? (
                        <p>In Cart</p>
                      ) : (
                        <BsFillCartCheckFill style={{ margin: "5px" }} />
                      )}
                    </CartWrapper>
                  </ImageWrapper>

                  <BottomWrapper>
                    <ListTitle>{product.title}</ListTitle>
                    <Price> $ {product.price}</Price>
                  </BottomWrapper>
                  <Category> {product.company}</Category>
                </Content>
              </ListComponentWrapper>
            </>
          );
        })}
      </ProductWrapper>
    </>
  );
}
