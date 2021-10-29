import React, { useEffect, useState } from "react";
import logoImg from "./img/hd_logo_ov.png";
import "../header/header.css";

const Header = (props) => {
  const [ScrollY, setScrollY] = useState(0);
  const [hide, setHide] = useState(false);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 3) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleScroll);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(ScrollY);

  return (
    <>
      <div className={hide ? "page_header active" : "page_header"}>
        <img className="logoimg" src={logoImg} alt="" />
        <ul className="title_total">
          <li className="title_name">회사소개</li>
          <li className="title_name">솔루션</li>
          <li className="title_name">서비스</li>
          <li className="title_name">고객센터</li>
          <li className="title_name">인재채용</li>
        </ul>
        <i className="fas fa-bars"></i>
      </div>
    </>
  );
};

export default Header;
