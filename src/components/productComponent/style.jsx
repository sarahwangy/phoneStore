import styled from "styled-components";

export const ListComponentWrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  // line-height: 20px;
  // margin: -1px -1px;
  // overflow: hidden;
  margin: 10px 10px;
  background-color: white;

  // height 宽度不用写固定，后期可以调整
  // height: 400px;
  display: block;
  border: 1px solid lightgray;
  border-radius: 10px;

  //  多个hover 怎么写/???
  &:hover {
    box-shadow: 5px 5px 5px 5px gray;
    transition: all 0.5s ease-in-out;
    // div div div {
    //   box-shadow: 5px 5px 5px 5px red;
    //   transition: all 0.5s ease-in-out;
    // }
  }
`;

export const Content = styled.div`
  // width 宽度不用写固定，后期可以调整
  // height:500px,
  // widht: 500px;
  // padding: 12px 7px;
  // background: #ffffff;
`;

export const ImageWrapper = styled.div`
// 这个是 cart小车的父类，小车包在了 imagewrapper 里面，这样一开始可以隐藏起来
// 当hover的时候，会出现向左向上的移动
    overflow: hidden;
    position: relative;
    width: 180px,
    margin: 0px 15px, 
    height: 200px, 
    padding: 10px,
    background: #ffffff
`;

export const BottomWrapper = styled.div`
  border-top: 1px solid lightgray;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  ${ListComponentWrapper}:hover & {
    background-color: lightgray;
  }
`;

export const Image = styled.img`
  height: 190px;
  width: 165px;
  margin: 20px;

  //  style components 写hover的方法，表示在点击ListComponentWrapper 下， 图片也发生变化

  ${ListComponentWrapper}:hover & {
    // transform: translateY(-5%);
    // height: 200px;
    // width: 180px;
    // 如果hover的时候，图片大小变化用width，height表示这会影响下面的高度，下面的图片会闪动
    // 所以可以用 scale 缩放表示，只是缩放图片大小，并不改变图片的width，height，所以下面图片不晃动
    transform: scale(1.1);
  }
`;

export const ListTitle = styled.div`
  text-align: left;
  max-height: 58px;
  max-width: 232px;
  overflow: hidden;
  margin-bottom: 15px;
  color: #000000d9;
  font-size: 15px;
  margin: -3.8px 0 5px;
  font-weight: 500;
  line-height: 58px;
`;

export const Price = styled.div`
  margin: 0 0 5px;
  color: #333333;

  // width 宽度不用写固定，后期可以调整
  // width: 232px;
  height: 20px;
  font-size: 20px;
  color: #333;
  font-weight: 600;
`;

export const Category = styled.div`
  font: 14px;
  color: #00000066;
  width: 232px;
  height: 20px;

  //  flex很好用，一个元素，父子多个元素都可以用，直接实现放在中间效果
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  ${ListComponentWrapper}:hover & {
    background-color: lightgray;
  }
`;

export const CartWrapper = styled.div`
  color: white;
  // 美观下的话，可以贴边的地方，没有radius，最上面有radius 弧度
  border-radius: 9px 0 0 0;
  font-size: 25px;
  position: absolute;
  bottom: -50px;
  right: -50px;

  // 可以打开网站，看css 样式调整颜色
  background-color: #009ffd;

  // position: absolute;
  // top: 0;
  // left: 0;

  ${ListComponentWrapper}:hover & {
    // 当hover的时候，可以向左向上移动。。。第一种方法
    right: 0px;
    bottom: 0px;
    // 添加动画移动速度
    transition: all 0.5s ease-in-out;

    // 第2种方法，用 x轴移动方向表示，正数是向右向下，负数 - 向上向左
    transform: translateX(-10px);
    transform: translateY(-0.5px);
  }
`;
