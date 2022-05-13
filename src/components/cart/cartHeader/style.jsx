import styled from "styled-components";
import breakpoint from "../../../breakpoints";

// 第一次打算自己写 style的时候，用了flex，后来打算用 ant design 的样式，因为自带了 flex，所以这里把之前的flex 去掉，要不然冲突了

export const CartHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;

  // 这个是针对div 内容居中的
  text-align: center;
  // display: flex;

  //  这个是专门对 flex box里面内容居中的
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 30px;
  // border: 1px solid red;

  // @media ${breakpoint.device.xs} {
  //   font-size: 10px;
  //   font-weight: 600;
  // }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
