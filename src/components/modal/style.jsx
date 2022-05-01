import styled from "styled-components";

export const MContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  //   z这一步特别重要，可以固定整个页面，而且透明度为0.3，这样下面的层级也可以看奥，不遮盖

  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  z-index: 999;
`;

export const MContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  // box-sizing: border-box;
  margin-top: 200px;
  // border: 1px solid black;
  background: #f3f3f3;
  margin: 200px 400px;
  padding-bottom: 60px;
  padding-top: 60px;
  width: 400px;
  height: 500px;
`;
export const MImageWrapper = styled.div`
  box-sizing: border-box;
  height: auto;
  margin: 20px;
  // border: 0.05rem solid #009ffd;

  img {
    // max-width: 100%;
    // height: auto;
    height: 240px;
    width: 240px;
  }
`;

export const MTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const MPrice = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: #6c757d;
  font-size: 1.25rem;
`;

export const MButtonOption = styled.div``;

export const MCartButton = styled.button`
  // 首字母大写
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid orange;
  border-color: orange;
  color: orange;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  margin-left: 15px;
  &:hover {
    background: orange;
    color: white;
    transition: all 500ms ease-in-out;
  }
`;

export const MBackButton = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid #009ffd;
  border-color: #009ffd;
  color: #009ffd;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  &:hover {
    background: #009ffd;
    color: white;
    transition: all 500ms ease-in-out;
  }
`;
