import React from "react";
import "../info/info.css";
import titleImg1 from "./img/main_visual_01.jpeg";
import mouseScroll from "./img/mv_scroll.png";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

import titleImg2 from "./img/main_visual_02.jpeg";
import titleImg3 from "./img/main_visual_03.jpeg";
import Header from "../../header/header";
import zIndex from "@material-ui/core/styles/zIndex";

const Info = (props) => {
  var items = [
    {
      img1: titleImg1,
    },
    {
      img1: titleImg2,
    },
    {
      img1: titleImg3,
    },
  ];
  return (
    <>
      <div className="jj11">
        <Carousel autoPlay={true}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
        <div className="page_body_info">
          <Header />
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
    </>
  );
  function Item(props) {
    return (
      <Paper style={{ boxShadow: "unset" }}>
        <img src={props.item.img1} />
        <Button className="CheckButton"></Button>
      </Paper>
    );
  }
};

export default Info;
