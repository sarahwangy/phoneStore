import React from "react";
import {
  MImageWrapper,
  MTitle,
  MPrice,
  MButtonOption,
  MCartButton,
  MBackButton,
  MContainer,
  MContent,
} from "./style";
import { Link } from "react-router-dom";
import { useModalState } from "../../state-hooks/reducer-hook";

//
export default function Modal() {
  const { ModalState, ModalActions } = useModalState();
  const { Modalproduct, openModal } = ModalState;

  //   即使之前没有定义，也可以img 解构吗？？
  const { img, title, price } = Modalproduct;
  const { closeModal } = ModalActions;

  if (!openModal) return null;
  return (
    <MContainer onClick={() => closeModal()}>
      <MContent>
        <p>Item added to cart</p>
        <MImageWrapper>
          {/* Modalproduct.img */}
          <img src={img} alt="" />
        </MImageWrapper>
        <MTitle>{title}</MTitle>
        <MPrice>Price: $ {price}</MPrice>
        <MButtonOption>
          <Link to="">
            <MBackButton onClick={() => closeModal()}>Back</MBackButton>
          </Link>
          <Link to={`/cart`}>
            <MCartButton onClick={() => closeModal()}>go To Cart</MCartButton>
          </Link>
        </MButtonOption>
      </MContent>
    </MContainer>
  );
}
