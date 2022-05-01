import styled from "styled-components";

export const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contact = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  // flex-direction: column;
  // flex-wrap: wrap;
`;

//  style component 下面可以继续往下深挖 元素 HTML， 类似于scss了
export const FormWrapper = styled.div`
  // display: flex;
  margin: 20px;
  // align-items: center;
  // justify-content: space-between;
  // flex-direction: column;
  flex-wrap: wrap;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  & input {
    padding: 10px;
    margin: 20px;
    width: 400px;
  }

  & textarea {
    margin: 20px;
    padding: 10px;
    width: 400px;
    font-size: 23px;
  }

  & button {
    border-radius: 5px;
    font-size: 23px;
    margin-top: 20px;
    cursor: pointer;

    // ！！！！！ 重要的技能。
    //  这里用了 button，header那里也有类似button，其他页面也有，所以后期button，可以进行封装。
    &:hover {
      transform: scale(1.3);
      background-color: orange;
      color: white;
      border: 1px solid orange;
    }
  }
`;
