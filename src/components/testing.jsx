import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import mouseScroll from "./body/info/img/mv_scroll.png";
import img from "./body/info/img/main_visual_01.jpeg";
import img2 from "./body/info/img/main_visual_02.jpeg";
import img3 from "./body/info/img/main_visual_03.jpeg";

const Testing = (props) => {
  var items = [
    {
      img1: img,
    },
    {
      img1: img2,
    },
    {
      img1: img3,
    },
  ];

  return (
    <div className="jj11">
      <Carousel autoPlay={true}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <div className="page_body_info">
        <p className="title_comment">
          SMB Intelligent Smart Factory
          <br />
          Platform Leader <span className="sysner_span">SYSNER</span>
        </p>
        <p className="mini_title_comment">
          중소·중견 제조기업에 최적화된,
          <span className="mini_span">인텔리전트 스마트팩토리</span> 솔루션을
          공급하겠습니다!
        </p>
        <div className="tag_a">
          <a href="https://www.naver.com/" className="link_Atag">
            네이버가기
          </a>
        </div>
        <img className="mouse" src={mouseScroll} alt="" />
      </div>
    </div>
  );

  function Item(props) {
    return (
      <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <img src={props.item.img1} />
        <Button className="CheckButton">Check it out!</Button>
      </Paper>
    );
  }
};
export default Testing;
